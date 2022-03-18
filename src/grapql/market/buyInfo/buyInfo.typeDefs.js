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
`;