import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleLike(unique: String!): Like
  }
`;