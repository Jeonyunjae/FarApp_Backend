import { gql } from "apollo-server";

export default gql`
  type Mutation {
    likeProduct(id: Int!): Like
  }
`;