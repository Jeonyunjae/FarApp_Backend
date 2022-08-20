import { logManager } from "../../../utilty/logManager/\blogManager";
import ERROR_CODE from "../../../utilty/type/errorCode";
import LEVEL from "../../../utilty/type/level";
import client from "../../client";

class UserBasicInfo {
  // #region UserInfo Read
  userBasicInfo(usercode) {
    const result = client.userbasicinfos.findUnique({
      where: { usercode },
    });
    return result;
  }

  userBasicInfoEmail(email) {
    return client.userbasicinfos.findUnique({ where: { email } });
  }

  userBasicInfos() {
    return client.userbasicinfos.findMany();
  }

  userBasicInfoToSeeProfile(usercode) {
    return client.userbasicinfos.findUnique({
      where: {
        usercode,
      },
      include: {
        following: true,
        followers: true,
      },
    });
  }

  userBasicInfoToSeeFollowers(usercode, page) {
    return client.userbasicinfos.findUnique({ where: { usercode } }).followers({
      take: 5,
      skip: (page - 1) * 5,
    });
  }

  userBasicInfoToSeeFollowing(usercode, lastUserCode) {
    return client.userbasicinfos.findUnique({ where: { usercode } }).following({
      take: 5,
      skip: lastUserCode ? 1 : 0,
      ...(lastUserCode && { cursor: { usercode: lastUserCode } }),
    });
  }

  userBasicInfoToFollowTotalCount(usercode) {
    return client.userbasicinfos.count({
      where: { following: { some: { usercode } } },
    });
  }

  userBasicInfoToTotalFollowing(usercode) {
    return client.userbasicinfos.count({
      where: {
        followers: {
          some: {
            usercode,
          },
        },
      },
    });
  }

  userBaiscInfoToTotalFollowers(usercode) {
    return client.userbasicinfos.count({
      where: {
        following: {
          some: {
            usercode,
          },
        },
      },
    });
  }

  userBaiscInfoToIsFollowing(usercode, loggedInUser) {
    const exists = client.userbasicinfos.count({
      where: {
        usercode: loggedInUser.userCode,
        following: {
          some: {
            usercode,
          },
        },
      },
    });
    return Boolean(exists);
  }

  userBasicInfoSearchUser(keyword: string) {
    client.userbasicinfos.findMany({
      where: {
        usercode: {
          startsWith: keyword.toLowerCase(),
        },
      },
    });
  }

  //#endregion

  // #region UserInfo delete
  delete(usercode) {
    client.userbasicinfos.delete({ where: { usercode } });
  }
  //#endregion

  // #region UserInfo create
  create(usercode, phonenumber, email) {
    const infoResult = client.userbasicinfos.create({
      data: {
        usercode,
        phonenumber,
        email,
      },
    });

    return infoResult;
  }
  //#endregion

  // #region UserInfo update
  updateAll(usercode, phonenumber, email, avatar) {
    return client.userbasicinfos.update({
      where: { usercode },
      data: { phonenumber, email, avatar },
    });
  }
  updatePhoneNumber(usercode, phonenumber) {
    return client.userbasicinfos.update({
      where: { usercode },
      data: { phonenumber },
    });
  }
  updateEmail(usercode, email) {
    return client.userbasicinfos.update({
      where: { usercode },
      data: { email },
    });
  }
  updateAvatar(usercode, avatar) {
    return client.userbasicinfos.update({
      where: { usercode },
      data: { avatar },
    });
  }
  updateFollow(usercode: string, loggedInUser: any) {
    return client.userbasicinfos.update({
      where: {
        usercode: loggedInUser.userCode,
      },
      data: {
        following: {
          connect: {
            usercode,
          },
        },
      },
    });
  }
  updateUnFollow(usercode: string, loggedInUser: any) {
    return client.userbasicinfos.update({
      where: {
        usercode: loggedInUser.userCode,
      },
      data: {
        following: {
          disconnect: {
            usercode,
          },
        },
      },
    });
  }
}
//#endregion

export default UserBasicInfo;
