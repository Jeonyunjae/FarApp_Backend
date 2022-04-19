import { gql } from "apollo-server";

export default gql`
  type Query {
    "해쉬태그 확인 API"
    seeHashtag(hashtag: String!): Hashtag
  }
`;