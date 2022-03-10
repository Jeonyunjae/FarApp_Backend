import { gql } from "apollo-server";

export default gql`
  type PositionAddressInfo {
    userCode: String
    locLatitude: Int
    locLongtitude: Int
  }
  type Query {
    positionAddressInfos: [PositionAddressInfo]
    positionAddressInfo(userCode: String!): PositionAddressInfo
  }
  type Mutation {
    createPositionAddressInfo(
      userCode: String!
      locLatitude: Int
      locLongtitude: Int
    ): PositionAddressInfo
    deletePositionAddressInfo(userCode: String!): PositionAddressInfo
    updatePositionAddressInfo(
      userCode: String!
      locLatitude: Int
      locLongtitude: Int
    ): PositionAddressInfo
  }
`;