import jwt from "jsonwebtoken";
import service from "../../../service/service";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    const { userCode } = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await service.UserInfo.userInfo(userCode)
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const protectedResolver = (ourResolver) => (
    root,
    args,
    context,
    info
  ) => {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "Please log in to perform this action.",
      };
    }
    return ourResolver(root, args, context, info);
  };