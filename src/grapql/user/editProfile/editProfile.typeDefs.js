import { gql } from "apollo-server";

export default gql`
  type EditProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      userCode: String
      password: String
      phoneNumber: String
      email: String
    ): EditProfileResult!
  }
`;