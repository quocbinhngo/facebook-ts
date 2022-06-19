import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";

const PUBLIC_KEY = config.get<string>("PUBLIC_KEY");
const PRIVATE_KEY = config.get<string>("PRIVATE_KEY");

const token = {
  signJwt: (object: Object, options?: jwt.SignOptions) => {
    return jwt.sign(object, PRIVATE_KEY, {
      ...(options && options),
      algorithm: "RS256",
    });
  },

  verifyJwt: function (token: string) {
    try {
      // console.log(token)
      const decoded = jwt.verify(token, PUBLIC_KEY);

      return {
        valid: true,
        expired: false,
        decoded,
      };
    } catch (error: any) {
      console.log(error);
      return {
        valid: false,
        expired: error.message === "jwt expired",
        decoded: null,
      };
    }
  },
};

export default token;
