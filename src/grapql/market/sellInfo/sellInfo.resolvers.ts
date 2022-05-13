import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

export default {
  SellInfo: {
    userBasicInfo: ({userCode}) => {
        service.UserBasicInfo.userBasicInfo(userCode);
    },
    hashtags: ({ unique }) => {
        logManager(LEVEL.INFO, ERROR_CODE.NONE, unique)
        service.HashTag.hashTagToSellInfo(unique);
    }
      
  },
};