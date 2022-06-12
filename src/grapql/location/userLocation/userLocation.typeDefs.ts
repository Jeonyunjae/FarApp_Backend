import { gql } from "apollo-server";

export default gql`
  type userLocation {
    userCode: String
    userState: Int
    positionAddress: PositionAddressInfo
    postAddress: PostAddressInfo
  }
`;
