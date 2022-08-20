import * as jwt from "jsonwebtoken";
import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { returnValue } from "../../shared/shared";
import { comparePassword } from "../utils/hash";
require("dotenv").config();

export default {
  Query: {
    findUserCode: async (_, { email }) => {
      const userBaiscInfo = await service.UserBasicInfo.userBasicInfoEmail(email)
      if (!userBaiscInfo) {
        logManager.Error(ERROR_CODE.FINDUSERCODE_USER_NOT_FOUND);
      }
      return returnValue(true, userBaiscInfo.usercode);
    },
  },
};
