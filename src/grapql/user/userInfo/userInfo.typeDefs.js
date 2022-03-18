import { gql } from "apollo-server";

export default gql`
  type UserInfo {
    userCode: String!
    password: String!
    userBasicInfo: UserBasicInfo
    createdAt: String!
    updatedAt: String!
  }
`;
