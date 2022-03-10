import client from "../client";
export default {
  Mutation: {
    createBuyInfo: (_, { unique, userCode }) =>
      client.buyInfo.create({
        data: {
          unique,
          userCode,
        },
      }),
    deleteBuyInfo: (_, { unique }) =>
      client.buyInfo.delete({ where: { unique } }),
    updateBuyInfo: (_, { unique, userCode, bookMark, transaction }) =>
      client.buyInfo.update({
        where: { unique },
        data: { unique, userCode, bookMark, transaction },
      }),
  },
};