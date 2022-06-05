import { gql } from "apollo-server";

export default gql`
  type userLocaiton {
    userCode: String
    useState: Int
    positionAddress: PositionAddressInfo
    postAddress: PostAddressInfo

  }
`;
