import { Resolver } from "dns";
import service from "../../../service/service";
import { Resolvers } from "../../../types";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";


const resolverFn = async (_, { unique }, { loggedInUser }) => {
  const likes = await service.Like.select_WhereUnique_SelectUserBasicInfo(unique);
  if (!likes) {
    logManager.Error(ERROR_CODE.SEEPRODUCT_DONT_PRODUCT);
  }
  return likes.map((like) => like.userBasicInfo);
};


export default {
  Query: {
    seeLikeProduct: protectedResolver(resolverFn),
  },
};