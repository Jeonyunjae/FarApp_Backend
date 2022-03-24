import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { Context } from "../../../types";

export const getUser = async (token: any) => {
  try {
    if (!token) {
      return null;
    }
    const verifiedToken: any = await jwt.verify(token, process.env.SECRET_KEY);
    if ("id" in verifiedToken) {
      const userInfo = await service.UserInfo.userInfo(verifiedToken.id);
      if (userInfo) {
        return userInfo;
      }
    }
    return null;
  } catch {
    return null;
  }
};

export const protectedResolver =
  (ourResolver) => (root: any, args: any, context: Context, info: any) => {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "Please log in to perform this action.",
      };
    }
    return ourResolver(root, args, context, info);
  };
