import client from "../../client";
export default {
  Mutation: {
    createPostAddressInfo: (_, { userCode, addressCode }) =>
      client.postAddressInfo.create({
        data: {
          userCode,
          addressCode,
        },
      }),
    deletePostAddressInfo: (_, { userCode }) => client.postAddressInfo.delete({ where: { userCode } }),
    updatePostAddressInfo: (_, { userCode, addressCode }) =>
      client.postAddressInfo.update({ where: { userCode }, data: { addressCode } }),
  },
};