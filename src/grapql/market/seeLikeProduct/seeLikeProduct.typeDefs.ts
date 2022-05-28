
import { gql } from "apollo-server";

export default gql`
  type Query {
    "프로필 확인 API"
    seeLikeProduct(unique: String!): Like
  }
`;
