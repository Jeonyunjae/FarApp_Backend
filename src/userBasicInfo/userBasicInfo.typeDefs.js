import { gql } from "apollo-server";

export default gql`
  type UserBasicInfo {
    userCode: String
    avatar: String
    phoneNumber: String
    email: String
    checkPhone: Boolean
    address: UserInfo
    rooms: [Room]
    message: [Message]
    createdAt: String
    updatedAt: String
  }
  type Query {
    userBasicInfos: [UserBasicInfo]
    userBasicInfo(userCode: String!): UserBasicInfo
  }
  type Mutation {
    createUserBasicInfo(
      userCode: String!
      phoneNumber: String!
      email: String!
    ): UserBasicInfo
    deleteUserBasicInfo(userCode: String!): UserBasicInfo
    updateUserBasicInfo(userCode: String!): UserBasicInfo
    updateUserBasicInfoCheckPhone(userCode: String!): UserBasicInfo
  }
`;
