import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

export default {
  SellInfo: {
    userBasicInfo: ({userCode}) => {
        return service.UserBasicInfo.userBasicInfo(userCode);
    },
    hashtags: ({ unique }) => {
        return service.HashTag.hashTagToSellInfo(unique);
    }
      
  },
};