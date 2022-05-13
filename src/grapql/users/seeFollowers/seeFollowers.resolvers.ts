import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (_, { userCode, page }, { loggedInUser }) => {
  const userbasicinfo = await service.UserBasicInfo.userBasicInfo(userCode);
  if (!userbasicinfo) {
    logManager.Error(ERROR_CODE.SEEFOLLOWERS_USER_NOT_FOUND);
  }
  const followers = await service.UserBasicInfo.userBasicInfoToSeeFollowers(
    userCode,
    page
  );
  const totalFollowers =
    await service.UserBasicInfo.userBasicInfoToFollowTotalCount(userCode);

  return {
    ok: true,
    followers,
    totalPages: Math.ceil(totalFollowers / 5),
  };
};

export default {
  Query: {
    seeFollowers: protectedResolver(resolverFn),
  },
};
