import client from "../../../service/client";
import service from "../../../service/service";
import { protectedResolver } from "../../users/utils/utils";
import { nanoid } from "nanoid";
import { logManager } from "../../../utilty/logManager/\blogManager";
import LEVEL from "../../../utilty/type/level";
import ERROR_CODE from "../../../utilty/type/errorCode";

const resolverFn = async (
  _,
  { picture, mainComment, subComment, amount, categoryCode },
  { loggedInUser }
) => {
  let hashtagObj = [];
  let unique,
    transaction = null;
  if (mainComment) {
    const hashtags = mainComment.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g);
    if(hashtags){
      hashtagObj = hashtags.map((hashtag) => ({
        where: { hashtag },
        create: { hashtag },
      }));
    }
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
