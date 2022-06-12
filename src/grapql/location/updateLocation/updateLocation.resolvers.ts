import { ApolloError, UserInputError } from "apollo-server";
import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import { returnValue } from "../../shared/shared";
import ERROR_CODE from "../../../utilty/type/errorCode";

export default {
  Mutation: {
    updateLocation: async (_, { userCode, locLatitude, locLongtitude }) => {
      //1. UserLocation에서 만들어 있는지 확인
      var userPositionLocation =
        await service.PositionAddressInfo.positionAddressInfo(userCode);
      var userPostLocation = await service.PostAddressInfo.postAddressInfo(
        userCode
      );

      if (!userPostLocation || !userPositionLocation) {
        logManager.Error(ERROR_CODE.UPDATELOCATION_USER_NOT_FOUND);
      }

      //2. PositionAddressInfo Update
      userPositionLocation =
        await service.PositionAddressInfo.update_whereUserCodeToState(
          userCode,
          locLatitude,
          locLongtitude
        );
      if (!userPositionLocation) {
        logManager.Error(
          ERROR_CODE.UPDATELOCATION_FAIL_UPDATE_POSITIONLOCATION
        );
      }

      //3. addressCode 정의되어있는지 확인 지금은 임의로 작성해두고 나중에 api 구성해야함
      const addressCode = "82000000";
      const postAddressCodeDefineInfo =
        await service.PostAddressCodeDefineInfo.postAddressCodeDefineInfo(
          addressCode
        );

      if (!postAddressCodeDefineInfo) {
        logManager.Error(
          ERROR_CODE.UPDATELOCATION_POSTADDRESSCODEDEFINEINFO_NOT_FOUND
        );
      }

      //4. PostAddressInfo 생성
      userPostLocation =
        await service.PostAddressInfo.update_whereUserCodeToAddressCode(
          userCode,
          addressCode
        );
      if (!userPostLocation) {
        logManager.Error(ERROR_CODE.UPDATELOCATION_FAIL_UPDATE_POSTLOCATION);
      }

      const userLocation = await service.UserLocation.userLocation(userCode);

      return userLocation;
    },
  },
};
