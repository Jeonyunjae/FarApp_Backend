import { gql } from "apollo-server";

export default gql`
  type PostAddressInfo {
    userCode: String
    addressCode: String
  }
  type Query {
    postAddressInfos: [PostAddressInfo]
    postAddressInfo(userCode: String!): PostAddressInfo
  }
  type Mutation {
    createPostAddressInfo(
      userCode: String
      addressCode: String
    ): PostAddressInfo
    deletePostAddressInfo(userCode: String!): PostAddressInfo
    updatePostAddressInfo(userCode: String!, addressCode: String!): PostAddressInfo
  }
`;
