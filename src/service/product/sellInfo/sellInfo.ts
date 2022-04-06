import client from "../../client";

const sellInfo = class SellInfo {
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
    hashtags,
    categoryCode
  ) {
    const infoResult = client.sellInfo.create({
      data: {
        unique,
        userCode,
        mainComment,
        subComment,
        picture,
        amount,
        transaction,
        hashtags: {
          connectOrCreate: [
            {
              where: {
                hashtag: "#food",
              },
              create: {
                hashtag: "#food",
              },
            },
          ],
        },
        categoryCode,
      },
    });

    return infoResult;
  }
  //#endregion

  // #region UserInfo update
  updateAll(unique,
    userCode,
    mainComment,
    subComment,
    picture,
    amount,
    transaction,
    hashtags,
    categoryCode) {
    return client.sellInfo.update({
      where: { unique },
      data: {
        userCode,
        mainComment,
        subComment,
        picture,
        amount,
        transaction,
        hashtags,
        categoryCode,
      },
    });
  }
};
//#endregion

export default sellInfo;
