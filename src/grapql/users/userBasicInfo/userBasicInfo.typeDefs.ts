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
    following: [UserBasicInfo]
    followers: [UserBasicInfo]
    totalFollowing: Int!
    totalFollowers: Int!
    isMe: Boolean
    isFollowing: Boolean!
    message: [Message]
    createdAt: String
    updatedAt: String
  }
`;
