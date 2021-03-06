import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (_, { userCode }, { loggedInUser }) => {
  const userbasicinfo = await service.UserBasicInfo.userBasicInfo(userCode);
  if (!userbasicinfo) {
    logManager.Error(ERROR_CODE.UNFOLLOWUSER_USER_NOT_FOUND);
  }

  const userBaiscInfo = await service.UserBasicInfo.updateUnFollow(
    userCode,
    loggedInUser
  );


  return {
    ok: true,
  };
};

export default {
  Mutation: {
    unfollowUser: protectedResolver(resolverFn),
  },
};
