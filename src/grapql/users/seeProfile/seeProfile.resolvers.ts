import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/logManager";
import Logger from "../../../utilty/logger/logger";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import { protectedResolver } from "../utils/utils";

const resolverFn = async (_, { userCode }, { loggedInUser }) => {
  const userbasicinfo = await service.UserBasicInfo.userBasicInfo(userCode);
  if (!userbasicinfo) {
    logManager(LEVEL.ERROR, ERROR_CODE.SEEPROFILE_USER_NOT_FOUND);
  }
  return userbasicinfo;
};

export default {
  Query: {
    seeProfile: protectedResolver(resolverFn),
  },
};
