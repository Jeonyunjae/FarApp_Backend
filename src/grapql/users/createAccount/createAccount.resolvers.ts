import { ApolloError, UserInputError } from "apollo-server";
import service from "../../../service/service";
import LEVEL from "../../../utilty/type/level";
import { logManager } from "../../../utilty/logManager/logManager";
import { hashPassword } from "../utils/hash";
import { getVariableName } from "../../../utilty/filename/filename";
import { returnValue } from "../../shared/shared";
import ERROR_CODE from "../../../utilty/type/errorCode";

export default {
  Mutation: {
    createAccount: async (_, { userCode, password, phoneNumber, email }) => {
      // check if username or email are already on DB.
      let userInfoResult = await service.UserInfo.userInfo(userCode);
      if (userInfoResult) {
        logManager.Error(ERROR_CODE.CREATEACCOUNT_EXIST_USERINFO);
      }

      let userBasicInfoResult = await service.UserBasicInfo.userBasicInfo(
        userCode
      );

      if (userBasicInfoResult) {
        logManager.Error(ERROR_CODE.CREATEACCOUNT_EXIST_USERBASICINFO);
      }

      // hash password
      const uglyPassword = await hashPassword(password);

      // save and return the user
      userInfoResult = await service.UserInfo.create(userCode, uglyPassword);

      if (!userInfoResult) {
        logManager.Error(ERROR_CODE.CREATEACCOUNT_FAIL_INSERT_USERINFO);
      }

      userBasicInfoResult = await service.UserBasicInfo.create(
        userCode,
        phoneNumber,
        email
      );

      if (!userBasicInfoResult) {
        logManager.Error(ERROR_CODE.CREATEACCOUNT_FAIL_INSERT_BASICINFO);
      }
      return returnValue(true, userCode);
    },
  },
};
