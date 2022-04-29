import { gql } from "apollo-server";

export default gql`
  type FindUserCodeResult {
    ok: Boolean!
    id: String
    error: String
  }
  type Query {
    "로그인 API -> UserInfo에서 아이디 비빌번호 확인"
    findUserCode(
      email: String!
    ): FindUserCodeResult!
  }
`;
