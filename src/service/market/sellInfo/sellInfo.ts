import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";
import { processHashtags } from "../utils/sellInfo";

class SellInfo {
  // #region UserInfo Read
  sellInfo(unique) {
    return client.sellInfo.findUnique({ where: { unique } });
  }

  sellInfos() {
    return client.userBasicInfo.findMany();
  }

  select_WhereUniqueUserCode(unique, loggedInUser){
    return client.sellInfo.findFirst({
      where: {
        unique,
        userCode: loggedInUser.userCode,
      },
      include: {
        hashtags: {
          select: {
            hashtag: true,
          },
        },
      },
    });
  }

  select_WhereUserBasicInfoFollowersUserCode(userCode){
    return client.sellInfo.findMany({
      where: {
        OR: [
          {
            userBasicInfo: {
              followers: {
                some: {
                  userCode: userCode,
                },
              },
            },
          },
          {
            userCode: userCode,
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  }

  hashTagToTotalSellInfo(id){
    return client.sellInfo.count({
      where: {
        hashtags: {
          some: {
            id,
          },
        },
      },
    })
  }
  //#endregion

  // #region UserInfo delete
  delete(unique) {
    const value = client.sellInfo.delete({ where: { unique } });
    logManager.Info(JSON.stringify(value));
    return value;
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

  updateToEditProduct(unique, mainComment, oldProduct){
    return client.sellInfo.update({
      where: {
        unique,
      },
      data: {
        mainComment,
        hashtags: {
          disconnect: oldProduct.hashtags,
          connectOrCreate: processHashtags(mainComment),
        },
      },
    });
  }
};
//#endregion

export default SellInfo;
