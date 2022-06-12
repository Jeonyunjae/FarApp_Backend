import { ApolloError, UserInputError } from "apollo-server";
import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import { returnValue } from "../../shared/shared";
import ERROR_CODE from "../../../utilty/type/errorCode";

export default {
  Mutation: {
    updateUserState: async (_, { userCode, userState }) => {
      //1. UserLocation에서 만들어 있는지 확인
      var userLocation = await service.UserLocation.userLocation(userCode);

      if (!userLocation) {
        logManager.Error(ERROR_CODE.UPDATELOCATION_USER_NOT_FOUND);
      }
      //2. UserLocation update
      userLocation = await service.UserLocation.update_whereUserCodeToState(userCode, userState);
      
      if (!userLocation) {
        logManager.Error(ERROR_CODE.UPDATEUSERSTATE_FAIL_UPDATE_STATE);
      }
      return userLocation;
    },
  },
};
