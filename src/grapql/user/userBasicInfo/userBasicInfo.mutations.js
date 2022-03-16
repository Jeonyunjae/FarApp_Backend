import client from "../../../service/client";

export default {
  Mutation: {
    createUserBasicInfo: (_, { userCode, phoneNumber, email }) =>
      client.userBasicInfo.create({
        data: {
          userCode,
          phoneNumber,
          email,
        },
      }),
    deleteUserBasicInfo: (_, { userCode }) =>
      client.userBasicInfo.delete({ where: { userCode } }),
    updateUserBasicInfo: (_, { userCode, phoneNumber, email }) =>
      client.userBasicInfo.update({
        where: { userCode },
        data: { avatar, phoneNumber, email },
      }),
    updateUserBasicInfoCheckPhone: (_, { userCode, checkPhone }) =>
      client.userBasicInfo.update({
        where: { userCode },
        data: { checkPhone },
      }),
  },
};
