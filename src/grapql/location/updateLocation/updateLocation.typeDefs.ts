import { gql } from "apollo-server";

export default gql`
  type Mutation {
    "Location Update API"
    updateLocation(
      userCode: String!
      locLatitude: Int
      locLongtitude: Int
    ): userLocation
  }
`;
