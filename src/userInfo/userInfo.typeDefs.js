import { gql } from "apollo-server";

export default gql`
  type UserInfo {
    userCode: String!
    password: String!
    userBasicInfo: UserBasicInfo
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    userInfos: [UserInfo]
    userInfo(userCode: String!): UserInfo
  }
  type Mutation {
    createUserInfo(userCode: String!, password: String!): UserInfo
    deleteUserInfo(iuserCode: String!): UserInfo
    updateUserInfo(userCode: String!): UserInfo
  }
`;
