import { Prisma } from "@prisma/client";
import { cli } from "winston/lib/winston/config";
import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class HashTag {
  // #region UserInfo Read
  hashTagToHashtag(hashtag: string) {
    const result = client.hashtag.findUnique({
      where: {
        hashtag,
      },
    });
    return result;
  }

  hashTags() {
    return client.hashtag.findMany();
  }

  hashTagToSellInfo(unique) {
    const result = client.hashtag.findMany({
      where: {
        sellInfos: {
          some: {
            unique,
          },
        },
      },
    });

    return result;
  }

  hashTagToId(id) {
    const value = client.hashtag.findUnique({
      where: {
        id,
      },
    }).sellInfos();

    return value;
  }

  //#endregion

  // #region UserInfo delete
  delete(hashtag) {
    client.hashtag.delete({ where: { hashtag } });
  }
  //#endregion

  // #region UserInfo create
  // create(userCode, phoneNumber, email) {
  //   const infoResult = client.userBasicInfo.create({
  //     data: {
  //       userCode,
  //       phoneNumber,
  //       email,
  //     },
  //   });

  //   return infoResult;
  // }
  //#endregion

  // #region UserInfo update
  //   updateAll(userCode, phoneNumber, email, avatar) {
  //     return client.userBasicInfo.update({ where: { userCode }, data: { phoneNumber, email, avatar } });
  //   }
  //   updatePhoneNumber(userCode, phoneNumber) {
  //     return client.userBasicInfo.update({ where: { userCode }, data: { phoneNumber } });
  //   }
  //   updateEmail(userCode, email) {
  //     return client.userBasicInfo.update({ where: { userCode }, data: { email } });
  //   }
  //   updateAvatar(userCode, avatar) {
  //     return client.userBasicInfo.update({ where: { userCode }, data: { avatar } });
  //   }
}
//#endregion

export default HashTag;
