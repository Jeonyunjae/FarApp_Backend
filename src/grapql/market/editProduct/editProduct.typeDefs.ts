import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProduct(unique: String!, mainComment: String!): SellInfo!
  }
`;