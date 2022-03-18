import { gql } from "apollo-server";

export default gql`
  type PositionAddressInfo {
    userCode: String
    locLatitude: Int
    locLongtitude: Int
  }
`;