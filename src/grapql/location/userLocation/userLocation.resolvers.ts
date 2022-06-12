import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

export default {
  userLocation: {
    positionAddress: ({userCode}) => {
      const positionAddress = service.PositionAddressInfo.positionAddressInfo(userCode);
      if (!positionAddress) {
        logManager.Error(ERROR_CODE.USERLOCATION_DONT_POSITIONADDRESS);
      }
      return positionAddress;
    },
    postAddress: ({ userCode }) => {
      logManager.Info(userCode);
      const postAddress = service.PostAddressInfo.postAddressInfo(userCode);
      logManager.Info(JSON.stringify(postAddress));
      if (!postAddress) {
        logManager.Error(ERROR_CODE.USERLOCATION_DONT_POSTADDRESS);
      }
      return postAddress;
    }
  },
};