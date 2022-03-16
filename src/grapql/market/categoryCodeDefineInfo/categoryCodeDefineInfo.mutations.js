import client from "../../../service/client";

export default {
  Mutation: {
    createCategoryCodeDefineInfo: (
      _,
      {
        category1Code,
        category1Name,
        category2Code,
        category2Name,
        category3Code,
        category3Name,
        category4Code,
        category4Name,
        categoryCode,
      }
    ) =>
      client.categoryCodeDefineInfo.create({
        data: {
          category1Code,
          category1Name,
          category2Code,
          category2Name,
          category3Code,
          category3Name,
          category4Code,
          category4Name,
          categoryCode,
        },
      }),
    deleteCategoryCodeDefineInfo: (_, { categoryCode }) =>
      client.categoryCodeDefineInfo.delete({ where: { categoryCode } }),
    updateCategoryCodeDefineInfo: (
      _,
      {
        category1Code,
        category1Name,
        category2Code,
        category2Name,
        category3Code,
        category3Name,
        category4Code,
        category4Name,
        categoryCode,
      }
    ) =>
      client.categoryCodeDefineInfo.update({
        where: { categoryCode },
        data: {
          category1Code,
          category1Name,
          category2Code,
          category2Name,
          category3Code,
          category3Name,
          category4Code,
          category4Name,
          categoryCode,
        },
      }),
  },
};