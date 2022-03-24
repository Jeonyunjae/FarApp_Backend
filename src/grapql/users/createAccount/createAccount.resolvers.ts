import { ApolloError } from "apollo-server";
import service from "../../../service/service";
import { hashPassword } from "../utils/hash";

export default {
  Mutation: {
    createAccount: async (
      _,
      { userCode, password, phoneNumber, email }
    ) => {
      // check if username or email are already on DB.
      let userInfoResult = await service.UserInfo.userInfo(userCode);
      if(userInfoResult){
        throw new ApolloError("Exist UserInfo", "EXIST_ID", {
          parameter: "id",
        });
      }

      let userBasicInfoResult = await service.UserBasicInfo.userBasicInfo(userCode);

      if(userBasicInfoResult){
        throw new ApolloError("Exist UserBasicInfo", "EXIST_ID", {
          parameter: "id",
        });
      }

      // hash password
      const uglyPassword = await hashPassword(password);

      // save and return the user
      userInfoResult = await service.UserInfo.create(userCode, uglyPassword);

      if(!userInfoResult){
        throw new ApolloError("Fail Insert UserInfo", "CREATE_ERROR", {
          parameter: "id",
        });
      }

      userBasicInfoResult = await service.UserBasicInfo.create(userCode, phoneNumber, email);

      if(!userBasicInfoResult){
        throw new ApolloError("Fail Insert UserBasicInfo", "CREATE_ERROR", {
          parameter: "id",
        });
      }

      return userInfoResult;
    },
  },
};