import service from "../../../service/service";
import { logger } from "../../../utilty/logger/winston";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

export default {
  Hashtag: {
    sellInfos: ( {id} ) => {
      return service.HashTag.hashTagToId(id);
    },
    totalSellInfos: ({id}) => {
        return service.SellInfo.hashTagToTotalSellInfo(id);
    }
  },
};


