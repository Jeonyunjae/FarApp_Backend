import { gql } from "apollo-server";

export default gql`
  type Like {
    id: Int!
    photo: SellInfo!
    createdAt: String!
    updatedAt: String!
  }
`;
