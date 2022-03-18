import { gql } from "apollo-server";

export default gql`
  type Message {
    id: Int
    payload: String
    userCode: String
    user: UserBasicInfo
    room: Room
    roomId: Int
    read: Boolean
    createdAt: String
    updatedAt: String
  }
`;
