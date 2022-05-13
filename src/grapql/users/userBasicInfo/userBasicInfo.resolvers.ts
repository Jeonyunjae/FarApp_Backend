import service from "../../../service/service";
import { logger } from "../../../utilty/logger/winston";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";

export default {
  UserBasicInfo: {
    totalFollowing: ( {userCode} ) => {
      return service.UserBasicInfo.userBasicInfoToTotalFollowing(userCode);
    },
    totalFollowers: ({ userCode }) => {
      return service.UserBasicInfo.userBaiscInfoToTotalFollowers(userCode);
    },
    isFollowing: ({ userCode }, _, { loggedInUser }) => {
      return service.UserBasicInfo.userBaiscInfoToIsFollowing(
        userCode,
        loggedInUser
      );
    },
    isMe: ({ userCode }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return userCode === loggedInUser.userCode;
    },
  },
};


