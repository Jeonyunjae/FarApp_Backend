import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";

const resolverFn = async (_, { unique }, { loggedInUser }) => {
  const sellinfo = await service.SellInfo.select_WhereUniqueUserCode(
    unique,
    loggedInUser.userCode
  );
  if (!sellinfo) {
    logManager.Error(ERROR_CODE.DELETEPRODUCT_PRODUCT_NOT_FOUND);
  } else if (sellinfo.usercode !== loggedInUser.userCode) {
    logManager.Error(ERROR_CODE.DELETEPRODUCT_NOT_AUTHORIZED);
  } else {
    await service.SellInfo.delete(unique);
    return {
      ok: true,
    };
  }
};

export default {
  Query: {
    deleteProduct: protectedResolver(resolverFn),
  },
};
