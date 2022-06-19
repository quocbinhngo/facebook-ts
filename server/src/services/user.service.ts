import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose";
import UserModel, { UserDocument, UserInput } from "../models/user.model";
import config from "config";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = config.get<number>("SALT_WORK_FACTOR");

export async function createUser(input: DocumentDefinition<UserInput>) {
  const user = await UserModel.create(input);
  return user;
}

export async function findUser(
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  const result = await UserModel.findOne(query, {}, options);
  return result;
}

export async function generateHashedPassword(originalPassword: string) {
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const hashedPassword = await bcrypt.hash(originalPassword, salt);
  return hashedPassword;
}

export async function verifyUser(
  id: string,
  options: QueryOptions = { lean: true }
) {
  const result = await UserModel.findByIdAndUpdate(
    id,
    { verified: true },
    options
  );

  return result;
}

export async function checkValidPassword(
  inputPassword: string,
  userPassword: string
) {
  return await bcrypt.compare(inputPassword, userPassword);
}
