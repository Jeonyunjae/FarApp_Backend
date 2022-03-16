import client from "../../../service/client";

export default {
  Query: {
    categoryCodeDefineInfos: () => client.categoryCodeDefineInfo.findMany(),
    categoryCodeDefineInfo: (_, { id }) => client.categoryCodeDefineInfo.findUnique({ where: { categoryCode } }),
  },
};