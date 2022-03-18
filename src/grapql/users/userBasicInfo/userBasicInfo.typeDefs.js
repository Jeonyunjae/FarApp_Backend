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
`;
