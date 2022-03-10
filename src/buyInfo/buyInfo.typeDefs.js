import { gql } from "apollo-server";

export default gql`
  type BuyInfo {
    unique: String
    userCode: String
    bookMark: Boolean
    transaction: Boolean
    createdAt: String
    updatedAt: String
  }
  type Query {
    buyInfos: [BuyInfo]
    buyInfo(id: Int!): BuyInfo
  }
  type Mutation {
    "판매물품 만들기"
    createBuyInfo(
      unique: String
      userCode: String
    ): BuyInfo
    deleteBuyInfo(unique: String!): BuyInfo
    updateBuyInfo(
      unique: String
      userCode: String
      bookMark: Boolean
      transaction: Boolean
    ): BuyInfo
  }
`;