import client from "../../client";


class HashTag {

  // #region UserInfo Read
  hashTag(hashtag) {
    return client.hashtag.findUnique({ where: { hashtag } });
  }

  hashTags() {
    return client.hashtag.findMany();
  }

  hashTagToSellInfo(id){
    return client.hashtag.findMany({
      where: {
        
      },
    })
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