import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { Context } from "../../../types";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

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
      return logManager.Error(
        ERROR_CODE.PLEASE_LOG_IN_TO_PERFORM_THIS_ACTION
      );
    }
    return ourResolver(root, args, context, info);
  };
