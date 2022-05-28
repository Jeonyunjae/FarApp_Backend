import { gql } from "apollo-server";

export default gql`
  type Query {
    deleteProduct(unique: String!): MutationResponse!
  }
`;