import { gql } from "apollo-server";

export default gql`
  type SeeFollowingResult {
    ok: Boolean!
    following: [UserBasicInfo]
  }
  type Query {
    seeFollowing(userCode: String!, lastUserCode: String): SeeFollowingResult!
  }
`;