import { gql } from "apollo-server";

export default gql`
  type Query {
    seeProductLikes(unique: String!): [UserBasicInfo]
  }
`;