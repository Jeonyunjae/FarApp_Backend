import client from "../../client";

class UserBasicInfo {
  // #region UserInfo Read
  userBasicInfo(userCode) {
    return client.userBasicInfo.findUnique({
      where: { userCode },
    });
  }

  userBasicInfoEmail(email) {
    return client.userBasicInfo.findUnique({ where: { email } });
  }

  userBasicInfos() {
    return client.userBasicInfo.findMany();
  }

  userBasicInfoToSeeFollowers(userCode, page) {
    return client.userBasicInfo.findUnique({ where: { userCode } }).followers({
      take: 5,
      skip: (page - 1) * 5,
    });
  }

  userBasicInfoToSeeFollowing(userCode, lastUserCode){
    return client.userBasicInfo
        .findUnique({ where: { userCode } })
        .following({
          take: 5,
          skip: lastUserCode ? 1 : 0,
          ...(lastUserCode && { cursor: { userCode: lastUserCode } }),
        });
  }

  userBasicInfoToFollowTotalCount(userCode) {
    return client.userBasicInfo.count({
      where: { following: { some: { userCode } } },
    });
  }

  //#endregion

  // #region UserInfo delete
  delete(userCode) {
    client.userBasicInfo.delete({ where: { userCode } });
  }
  //#endregion

  // #region UserInfo create
  create(userCode, phoneNumber, email) {
    const infoResult = client.userBasicInfo.create({
      data: {
        userCode,
        phoneNumber,
        email,
      },
    });

    return infoResult;
  }
  //#endregion

  // #region UserInfo update
  updateAll(userCode, phoneNumber, email, avatar) {
    return client.userBasicInfo.update({
      where: { userCode },
      data: { phoneNumber, email, avatar },
    });
  }
  updatePhoneNumber(userCode, phoneNumber) {
    return client.userBasicInfo.update({
      where: { userCode },
      data: { phoneNumber },
    });
  }
  updateEmail(userCode, email) {
    return client.userBasicInfo.update({
      where: { userCode },
      data: { email },
    });
  }
  updateAvatar(userCode, avatar) {
    return client.userBasicInfo.update({
      where: { userCode },
      data: { avatar },
    });
  }
  updateFollow(userCode: string, loggedInUser: any) {
    return client.userBasicInfo.update({
      where: {
        userCode: loggedInUser.userCode,
      },
      data: {
        following: {
          connect: {
            userCode,
          },
        },
      },
    });
  }
  updateUnFollow(userCode: string, loggedInUser: any) {
    return client.userBasicInfo.update({
      where: {
        userCode: loggedInUser.userCode,
      },
      data: {
        following: {
          disconnect: {
            userCode,
          },
        },
      },
    });
  }
}
//#endregion

export default UserBasicInfo;
