import { Resolver } from "dns";
import service from "../../../service/service";
import { Resolvers } from "../../../types";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";

const resolverFn = async (_, { unique }, { loggedInUser }) => {
  const sellinfo = service.SellInfo.select_WhereUserBasicInfoFollowersUserCode(
    loggedInUser.userCode
  );
  if (!sellinfo) {
    logManager.Error(ERROR_CODE.SEEFEED_DONT_PRODUCT);
  }
  return sellinfo;
};

export default {
  Query: {
    seeFeed: protectedResolver(resolverFn),
  },
};
