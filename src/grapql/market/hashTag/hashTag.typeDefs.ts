import { gql } from "apollo-server";

export default gql`
  type Hashtag {
    id: Int!
    hashtag: String!
    sellInfos: [SellInfo]
    totalSellInfos: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
