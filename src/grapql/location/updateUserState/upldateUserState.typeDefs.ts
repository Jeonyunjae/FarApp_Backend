import { gql } from "apollo-server";

export default gql`
  type Mutation {
    "회원가입 API -> UserInfo와 UserBasicInfo 생성"
    updateUserState(
      userCode: String!
      userState: Int
    ): userLocation
  }
`;
