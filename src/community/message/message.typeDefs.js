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
  type Query {
    messages: [Message]
    message(id: Int!): Message
  }
  type Mutation {
    createMessage(
      id: Int
      payload: String
      userCode: String
      roomId: Int
    ): Message
    deleteMessage(id: Int!): Message
    updateMessage(id: Int!, year: Int!): Message
  }
`;
