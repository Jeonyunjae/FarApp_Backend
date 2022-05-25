import { Resolver } from "dns";
import service from "../../../service/service";
import { Resolvers } from "../../../types";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";

const resolverFn = async (_, { unique }, { loggedInUser }) => {
  const product = await service.SellInfo.sellInfo(unique);
  if (!product) {
    logManager.Error(ERROR_CODE.TOGGLELIKE_DONT_PRODUCT);
  }

  
  let like = await service.Like.select_WhereUserCodeUnique(unique, loggedInUser.userCode);
  if (like) {
    like = await service.Like.delete_WhereUserCodeUnique(unique, loggedInUser.userCode);
  } else {
    like = await service.Like.create(loggedInUser.userCode, product.unique);
  }
  return like;
};

export default {
  Mutation: {
    toggleLike: protectedResolver(resolverFn),
  },
};
