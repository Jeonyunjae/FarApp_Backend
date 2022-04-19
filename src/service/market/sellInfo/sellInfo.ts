import client from "../../client";

class SellInfo {
  // #region UserInfo Read
  sellInfo(unique) {
    return client.sellInfo.findUnique({ where: { unique } });
  }

  sellInfos() {
    return client.userBasicInfo.findMany();
  }
  //#endregion

  // #region UserInfo delete
  delete(unique) {
    client.sellInfo.delete({ where: { unique } });
  }
  //#endregion

  // #region UserInfo create
  create(
    unique,
    userCode,
    mainComment,
    subComment,
    picture,
    amount,
    transaction,
    hashtagObj,
    categoryCode
  ) {
    return client.sellInfo.create({
      data: {
        unique,
        userCode,
        mainComment,
        subComment,
        picture,
        amount,
        transaction,
        ...(hashtagObj.length > 0 && {
          hashtags: {
            connectOrCreate: hashtagObj,
          },
        }),
        categoryCode,
      },
    });
  }
  //#endregion

  // #region UserInfo update
  updateAll(
    unique,
    userCode,
    mainComment,
    subComment,
    picture,
    amount,
    transaction,
    hashtagObj,
    categoryCode
  ) {
    return client.sellInfo.update({
      where: { unique },
      data: {
        userCode,
        mainComment,
        subComment,
        picture,
        amount,
        transaction,
        ...(hashtagObj.length > 0 && {
          hashtags: {
            connectOrCreate: hashtagObj,
          },
        }),
        categoryCode,
      },
    });
  }
};
//#endregion

export default SellInfo;
