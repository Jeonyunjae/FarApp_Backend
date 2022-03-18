import { gql } from "apollo-server";

export default gql`
  type Room {
    id: Int
    users: [UserBasicInfo]
    messages: [Message]
    createdAt: String!
    updatedAt: String!
  }
`;
