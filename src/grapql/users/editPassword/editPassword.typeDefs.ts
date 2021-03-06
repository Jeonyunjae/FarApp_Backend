import { gql } from "apollo-server";

export default gql`
  type Mutation {
    "로그인 API -> UserInfo에서 아이디 비빌번호 확인"
    editPassword(
      password: String!
    ): MutationResponse!
  }
`;
