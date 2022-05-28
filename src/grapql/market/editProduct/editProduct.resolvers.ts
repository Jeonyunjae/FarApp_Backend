import service from "../../../service/service";
import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { protectedResolver } from "../../users/utils/utils";

const resolverFn = async (_, { unique, mainComment }, { loggedInUser }) => {
  const oldProduct = await service.SellInfo.select_WhereUniqueUserCode(
    unique,
    loggedInUser
  );
  if (!oldProduct) {
    return {
      ok: false,
      error: "SellInfo not found.",
    };
  }
  const product = await service.SellInfo.updateToEditProduct(
    unique,
    mainComment,
    oldProduct
  );

  return product;
};

export default {
  Mutation: {
    editProduct: protectedResolver(resolverFn),
  },
};
