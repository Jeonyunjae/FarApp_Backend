import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { Resolvers } from "../../../types";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { comparePassword } from "../utils/hash";
require("dotenv").config();

const resolvers: Resolvers = {
  Mutation : {
    login: async (_, { userCode, password }) => {
      logManager(LEVEL.DEBUG, userCode);
      const userInfo = await service.UserInfo.userInfo(userCode)
      
      if (!userInfo) {
        logManager(LEVEL.ERROR, ERROR_CODE.LOGIN_USER_NOT_FOUND);
      }
      const passwordOk = await comparePassword(password, userInfo.password);
      
      if (!passwordOk) {
        logManager(LEVEL.ERROR, ERROR_CODE.LOGIN_INCORRECT_PASSWORD);
      }
      
      const token = await jwt.sign({ id: userInfo.userCode }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};

export default resolvers;
