import { gql } from "apollo-server";

export default gql`
  type SeeFollowersResult {
    ok: Boolean!
    followers: [UserBasicInfo]
    totalPages: Int
  }
  type Query {
    seeFollowers(userCode: String!, page: Int!): SeeFollowersResult!
  }
`;