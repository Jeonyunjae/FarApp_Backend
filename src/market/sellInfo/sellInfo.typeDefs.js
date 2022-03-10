import { gql } from "apollo-server";

export default gql`
  type SellInfo {
    unique: String
    userCode: String
    mainComment: String
    subComment: String
    picture: String
    amount: Int
    transaction: Boolean
    categoryCode: String
    createdAt: String
    updatedAt: String
  }
  type Query {
    userSellInfos: [SellInfo]
    userSellInfo(userCode: String!): SellInfo
  }
  type Mutation {
    createSellInfo(
      unique: String
      userCode: String
      mainComment: String
      subComment: String
      picture: String
      amount: Int
      transaction: Boolean
      categoryCode: String
    ): SellInfo
    deleteSellInfo(iuserCode: String!): SellInfo
    updateSellInfo(userCode: String!): SellInfo
  }
`;
