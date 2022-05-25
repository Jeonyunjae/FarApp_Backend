import { Resolver } from "dns";
import service from "../../../service/service";
import { Resolvers } from "../../../types";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";


const resolverFn = async (_, { unique }, { loggedInUser }) => {
  const sellinfo = await service.SellInfo.sellInfo(unique)
  if (!sellinfo) {
    logManager.Error(ERROR_CODE.SEEPRODUCT_DONT_PRODUCT);
  }
  return sellinfo;
};


export default {
  Mutation: {
    likeProduct: protectedResolver(resolverFn),
  },
};