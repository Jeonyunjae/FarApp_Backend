import { gql } from "apollo-server";

export default gql`
  type Mutation {
    "회원가입 API -> UserInfo와 UserBasicInfo 생성"
    createAccount(
      userCode: String!
      password: String!
      phoneNumber: String
      email: String
    ): UserInfo
  }
`;
