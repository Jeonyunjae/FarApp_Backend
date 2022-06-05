import { ApolloError, UserInputError } from "apollo-server";
import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import { returnValue } from "../../shared/shared";
import ERROR_CODE from "../../../utilty/type/errorCode";

export default {
  Mutation: {
    createLocation: async (_, { userCode, locLatitude, locLongtitude }) => {
      //1. UserLocation에서 만들어 있는지 확인
      var userLocation = await service.UserLocation.userLocation(userCode);
      var userPositionLocation =
        await service.PositionAddressInfo.positionAddressInfo(userCode);
      var userPostLocation = await service.PostAddressInfo.postAddressInfo(
        userCode
      );

      if (userLocation || userPostLocation || userPositionLocation) {
        logManager.Error(ERROR_CODE.CREATELOCATION_EXIST_USER);
      }
      //2. UserLocation 생성
      const userState = 0;
      userLocation = await service.UserLocation.create(userCode, userState);
      if (!userLocation) {
        logManager.Error(ERROR_CODE.CREATEALOCATION_FAIL_INSERT_USERLOCATION);
      }
      //3. PositionAddressInfo 생성
      userPositionLocation = await service.PositionAddressInfo.create(
        userCode,
        locLatitude,
        locLongtitude
      );
      if (!userPositionLocation) {
        logManager.Error(
          ERROR_CODE.CREATEALOCATION_FAIL_INSERT_POSITIONLOCATION
        );
      }

      //4. PostAddressInfo 생성
      //지금은 임의로 작성해두고 나중에 api 구성해야함 밖에서 가지고 오던지
      const addressCode = "82000000";
      userPostLocation = await service.PostAddressInfo.create(
        userCode,
        addressCode
      );
      if (!userPostLocation) {
        logManager.Error(
          ERROR_CODE.CREATEALOCATION_FAIL_INSERT_POSTLOCATION
        );
      }
      return userLocation;
    },
  },
};
