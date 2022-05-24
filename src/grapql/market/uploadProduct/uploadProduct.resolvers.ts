import client from "../../../service/client";
import service from "../../../service/service";
import { protectedResolver } from "../../users/utils/utils";
import { nanoid } from "nanoid";
import { logManager } from "../../../utilty/logManager/\blogManager";
import LEVEL from "../../../utilty/type/level";
import ERROR_CODE from "../../../utilty/type/errorCode";
import { processHashtags } from "../../../service/market/utils/sellInfo";

const resolverFn = async (
  _,
  { picture, mainComment, subComment, amount, categoryCode },
  { loggedInUser }
) => {
  let hashtagObj = [];
  let unique,
    transaction = null;
  if (mainComment) {
    hashtagObj = processHashtags(mainComment);
  }
  unique = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
  transaction = true;

  const sellinfo = await service.SellInfo.create(
    unique,
    loggedInUser.userCode,
    mainComment,
    subComment,
    picture,
    amount,
    transaction,
    hashtagObj,
    categoryCode
  );

  if (!sellinfo) {
    logManager.Error(ERROR_CODE.UPLOADPRODUCT_FAIL_INSERT_SELLINFO);
  }

  return sellinfo;
};

export default {
  Mutation: {
    uploadProdct: protectedResolver(resolverFn),
  },
};
