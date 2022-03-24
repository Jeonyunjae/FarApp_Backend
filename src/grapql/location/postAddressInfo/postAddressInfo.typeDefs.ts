import { gql } from "apollo-server";

export default gql`
  type PostAddressInfo {
    userCode: String
    addressCode: String
  }
`;
