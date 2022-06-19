import config from "config";
import { Request, Response } from "express";
import { get, result } from "lodash";

import { checkValidPassword, createUser, findUser, generateHashedPassword, verifyUser } from "../services/user.service";
import mailer from "../utils/mailer.util";
import token from "../utils/token.util";
import { ActivateAccountInput, LoginAccountInput, RegisterAccountInput } from "../validations/user.validation";

export async function registerAccountHandler(
  req: Request<{}, {}, RegisterAccountInput["body"], {}>,
  res: Response
) {
  try {
    const { email, password } = req.body;

    const isNotUniqueEmail = await findUser({ email });
    if (isNotUniqueEmail) {
      return res.status(400).json({
        message: "This email already exists, try with a different email",
      });
    }

    // const isNotUniqueUsername = await findUser({ username });
    // if (isNotUniqueUsername) {
    //   // return res.status(400).json({
    //   //   message: "This username already exists, try with a different username",
    //   // });

    //   return res
    //     .status(400)
    //     .send("This username already exists, try with a different username");
    // }

    const hashedPassword = await generateHashedPassword(password);
    const userInput = { ...req.body, password: hashedPassword };
    const user = await createUser(userInput);

    console.log("HEllo");

    const emailVerficationToken = token.signJwt(
      { id: user._id.toString() },
      { expiresIn: "10m" }
    );
    const verificationUrl = `${config.get<string>(
      "BASE_URL"
    )}/activate/${emailVerficationToken}`;
    mailer.sendVerificationEmail(user.email, user.firstName, verificationUrl);

    const result = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      gender: user.gender,
      avatar: user.avatar,
      birthYear: user.birthYear,
      birthMonth: user.birthMonth,
      birthDay: user.birthDay,
      token: emailVerficationToken,
      message: "Register account successfully",
    };
    return res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function activateAccountHandler(
  req: Request<{}, {}, ActivateAccountInput["body"], {}>,
  res: Response
) {
  try {
    const { accessToken } = req.body;
    const { decoded } = token.verifyJwt(accessToken);

    if (!decoded || !get(decoded, "id")) {
      return res.status(400).json({ message: "Invalid access token" });
    }

    const userId = get(decoded, "id");
    const user = await findUser({ id: userId });

    if (!user) {
      return res.status(400).json({ message: "This user is not existed" });
    }

    if (user.verified) {
      return res.status(400).json({ message: "The user is already verified" });
    }

    await verifyUser(userId);
    return res
      .status(200)
      .json({ message: "Account has been activated successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function loginAccountHandler(
  req: Request<{}, {}, LoginAccountInput["body"], {}>,
  res: Response
) {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email });

    if (!user) {
      return res.status(400).json({ message: "The account is not existed" });
    }

    if (!user.verified) {
      return res.status(400).json({ message: "Your account is not verified" });
    }

    const isValidPassword = await checkValidPassword(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const accessToken = token.signJwt(
      { id: user._id.toString() },
      { expiresIn: "7d" }
    );
    const result = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      gender: user.gender,
      avatar: user.avatar,
      birthYear: user.birthYear,
      birthMonth: user.birthMonth,
      birthDay: user.birthDay,
      token: accessToken,
      message: "Login successfully",
    };
    return res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
