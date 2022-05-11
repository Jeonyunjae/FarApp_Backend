import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (_, { userCode, lastUserCode }, { loggedInUser }) => {
  const userbasicinfo = await service.UserBasicInfo.userBasicInfo(userCode);
  if (!userbasicinfo) {
    logManager(LEVEL.ERROR, ERROR_CODE.SEEFOLLOWING_USER_NOT_FOUND);
  }

  const userBaiscInfo = await service.UserBasicInfo.updateUnFollow(
    userCode,
    loggedInUser
  );

  logManager(LEVEL.INFO, ERROR_CODE.NONE, JSON.stringify(userBaiscInfo));

  const following = await service.UserBasicInfo.userBasicInfoToSeeFollowing(userCode, lastUserCode)
  
  return {
    ok: true,
    following,
  };
};

export default {
  Query: {
    seeFollowing: protectedResolver(resolverFn),
  },
};
