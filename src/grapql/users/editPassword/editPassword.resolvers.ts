import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { returnValue } from "../../shared/shared";
import { comparePassword, hashPassword } from "../utils/hash";
require("dotenv").config();

export default {
  Mutation: {
    editPassword: async (_, { userCode, password }) => {
      // hash password
      const uglyPassword = await hashPassword(password);

      const userBaiscInfo = await service.UserInfo.updatePassword(
        userCode,
        uglyPassword
      );
      if (!userBaiscInfo || userBaiscInfo.password !== uglyPassword) {
        logManager(
          LEVEL.ERROR,
          ERROR_CODE.EDITPASSWORD_FAIL_PASSWORD_UPDATE
        );

      }
      return returnValue(true, userCode);
    },
  },
};
