import { gql } from "apollo-server";

export default gql`
  type SellInfo {
    unique: String
    userCode: String
    mainComment: String
    subComment: String
    userBasicInfo: UserBasicInfo
    hashtags: [Hashtag]
    picture: String
    amount: Int
    transaction: Boolean
    categoryCode: String
    createdAt: String
    updatedAt: String
  }
`;
