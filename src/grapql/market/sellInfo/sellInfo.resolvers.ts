import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

export default {
  SellInfo: {
    userBasicInfo: ({userCode}) => {
      const userbasicinfo = service.UserBasicInfo.userBasicInfo(userCode);
      if (!userbasicinfo) {
        logManager.Error(ERROR_CODE.SELLINFO_DONT_USERBASICINFO);
      }
      return userbasicinfo;
    },
    hashtags: ({ unique }) => {
      const hashtags = service.HashTag.hashTagToSellInfo(unique);
      if (!hashtags) {
        logManager.Error(ERROR_CODE.SELLINFO_DONT_HASHTAGS);
      }
      return hashtags;
    },
    likes: ({ unique }) => {
      const likes = service.Like.Count(unique);
      if (!likes) {
        logManager.Error(ERROR_CODE.SELLINFO_DONT_LIKE);
      }
      return likes;
    },
  },
};