import client from "../../client";
export default {
  Mutation: {
    createUserInfo: (_, { userCode, password }) =>
      client.userInfo.create({
        data: {
          userCode,
          password,
        },
      }),
    deleteUserInfo: (_, { id }) => client.userInfo.delete({ where: { userCode } }),
    updateUserInfo: (_, { id, year }) =>
      client.userInfo.update({ where: { userCode }, data: { password } }),
  },
};