import client from "../../client";
export default {
  Mutation: {
    createSellInfo: (
      _,
      {
        unique,
        userCode,
        mainComment,
        subComment,
        picture,
        amount,
        transaction,
        categoryCode,
      }
    ) =>
      client.sellInfo.create({
        data: {
          unique,
          userCode,
          mainComment,
          subComment,
          picture,
          amount,
          transaction,
          categoryCode,
        },
      }),
    deleteSellInfo: (_, { id }) =>
      client.sellInfo.delete({ where: { unique } }),
    updateSellInfo: (_, { id, year }) =>
      client.sellInfo.update({
        where: { unique },
        data: {
          mainComment,
          subComment,
          picture,
          amount,
          transaction,
          categoryCode,
        },
      }),
  },
};
