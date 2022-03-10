import client from "../client";
export default {
  Query: {
    userSellInfos: () => client.sellInfo.findMany(),
    userSellInfo: (_, { unique }) =>
      client.sellInfo.findUnique({ where: { unique } }),
  },
};
