import { gql } from "apollo-server";

export default gql`
  type unFollowUserResult {
    ok: Boolean!
  }
  type Mutation {
    unfollowUser(userCode: String!): unFollowUserResult
  }
`;