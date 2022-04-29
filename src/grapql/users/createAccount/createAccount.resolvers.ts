import { ApolloError, UserInputError } from "apollo-server";
import service from "../../../service/service";
import LEVEL from "../../../utilty/type/level";
import { logManager } from "../../../utilty/error/error";
import { hashPassword } from "../utils/hash";
import { getVariableName } from "../../../utilty/filename/filename";

export default {
  Mutation: {
    createAccount: async (_, { userCode, password, phoneNumber, email }) => {
      // check if username or email are already on DB.
      let userInfoResult = await service.UserInfo.userInfo(userCode);
      if (userInfoResult) {
        logManager(LEVEL.ERROR, `Exist_UserInfo`, 1);
      }

      let userBasicInfoResult = await service.UserBasicInfo.userBasicInfo(
        userCode
      );

      if (userBasicInfoResult) {
        logManager(LEVEL.ERROR, "Exist_UserBasicInfo", 2);
      }

      logManager(LEVEL.ERROR, "1234", 0);
      // hash password
      const uglyPassword = await hashPassword(password);

      // save and return the user
      userInfoResult = await service.UserInfo.create(userCode, uglyPassword);

      if (!userInfoResult) {
        logManager(LEVEL.ERROR, "Fail_Insert_UserInfo", 3);
      }

      userBasicInfoResult = await service.UserBasicInfo.create(
        userCode,
        phoneNumber,
        email
      );

      if (!userBasicInfoResult) {
        logManager(LEVEL.ERROR, "Fail_Insert_UserBasicInfo", 4);
      }
      return {
        ok: true,
      };
    },
  },
};
