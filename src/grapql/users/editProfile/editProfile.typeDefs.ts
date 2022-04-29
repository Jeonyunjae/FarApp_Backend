import { gql } from "apollo-server";

export default gql`
  scalar Upload
  type Mutation {
    editProfile(
      userCode: String
      phoneNumber: String
      email: String
      avatar: Upload
    ): MutationResponse!
  }
`;
