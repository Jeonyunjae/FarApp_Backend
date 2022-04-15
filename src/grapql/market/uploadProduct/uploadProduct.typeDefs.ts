import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadProdct(
      picture: String!
      mainComment: String!
      subComment: String
      amount: Int!
      categoryCode: String!
    ): SellInfo
  }
`;
