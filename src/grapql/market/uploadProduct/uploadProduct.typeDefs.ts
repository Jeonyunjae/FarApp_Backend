import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadProduct(file: String!, caption: String): SellInfo
  }
`;