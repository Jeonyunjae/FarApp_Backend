import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";
import { processHashtags } from "../utils/sellInfo";

class SellInfo {
  // #region UserInfo Read
  sellInfo(unique) {
    return client.sellinfo.findUnique({ where: { unique } });
  }

  sellInfos() {
    return client.sellinfo.findMany();
  }

  select_WhereUniqueUserCode(unique, loggedInUser){
    return client.sellinfo.findFirst({
      where: {
        unique,
        usercode: loggedInUser.userCode,
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

  select_WhereUserBasicInfoFollowersUserCode(usercode){
    return client.sellinfo.findMany({
      where: {
        OR: [
          {
            userbasicinfo: {
              followers: {
                some: {
                  usercode: usercode,
                },
              },
            },
          },
          {
            usercode: usercode,
          },
        ],
      },
      orderBy: {
        createdat: "desc",
      },
    })
  }

  hashTagToTotalSellInfo(id){
    return client.sellinfo.count({
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
    const value = client.sellinfo.delete({ where: { unique } });
    logManager.Info(JSON.stringify(value));
    return value;
  }
  //#endregion

  // #region UserInfo create
  create(
    unique,
    usercode,
    maincomment,
    subcomment,
    picture,
    amount,
    transaction,
    hashtagObj,
    categorycode
  ) {
    return client.sellinfo.create({
      data: {
        unique,
        usercode,
        maincomment,
        subcomment,
        picture,
        amount,
        transaction,
        ...(hashtagObj.length > 0 && {
          hashtags: {
            connectOrCreate: hashtagObj,
          },
        }),
        categorycode,
      },
    });
  }
  //#endregion

  // #region UserInfo update
  updateAll(
    unique,
    usercode,
    maincomment,
    subcomment,
    picture,
    amount,
    transaction,
    hashtagObj,
    categorycode
  ) {
    return client.sellinfo.update({
      where: { unique },
      data: {
        usercode,
        maincomment,
        subcomment,
        picture,
        amount,
        transaction,
        ...(hashtagObj.length > 0 && {
          hashtags: {
            connectOrCreate: hashtagObj,
          },
        }),
        categorycode,
      },
    });
  }

  updateToEditProduct(unique, maincomment, oldproduct){
    return client.sellinfo.update({
      where: {
        unique,
      },
      data: {
        maincomment,
        hashtags: {
          disconnect: oldproduct.hashtags,
          connectOrCreate: processHashtags(maincomment),
        },
      },
    });
  }
};
//#endregion

export default SellInfo;
