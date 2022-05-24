import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";


const resolverFn = async (_, { hashtag }, { loggedInUser }) => {
  const sellinfo = await service.HashTag.hashTagToHashtag(hashtag);
  if (!sellinfo) {
    logManager.Error(ERROR_CODE.SEEPRODUCT_DONT_PRODUCT);
  }
  return sellinfo;
};

export default {
  Query: {
    seeHashtag: protectedResolver(resolverFn),
  },
};