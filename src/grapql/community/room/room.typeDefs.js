import { gql } from "apollo-server";

export default gql`
  type Room {
    id: Int
    users: [UserBasicInfo]
    messages: [Message]
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    rooms: [Room]
    room(id: Int!): Room
  }
  type Mutation {
    createRoom(id: Int!): Room
    deleteRoom(id: Int!): Room
    updateRoom(id: Int!): Room
  }
`;
