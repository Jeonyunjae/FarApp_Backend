import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";

export default {
  Query: {
    seeProductLikes: async (_, { unique }) => {
      const likes = await service.Like.select_WhereUnique_SelectUserBasicInfo(unique);
      if (!likes) {
        logManager.Error(ERROR_CODE.SEEPRODUCTLIKE_DONT_PRODUCT);
      }

      return likes.map((like) => like.userBasicInfo);;
    },
  },
};