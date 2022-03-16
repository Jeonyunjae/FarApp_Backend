import { gql } from "apollo-server";

export default gql`
  type PostAddressCodeDefineInfo {
    countryCode: Int
    countryName: String
    address1Code: Int
    address1Name: String
    address2Code: Int
    address2Name: String
    address3Code: Int
    address3Name: String
    addressCode: String
    address: PostAddressInfo
  }
  type Query {
    postAddressCodeDefineInfos: [PostAddressCodeDefineInfo]
    postAddressCodeDefineInfo(addressCode: String!): PostAddressCodeDefineInfo
  }
  type Mutation {
    createPostAddressCodeDefineInfo(
      countryCode: Int
      countryName: String
      address1Code: Int
      address1Name: String
      address2Code: Int
      address2Name: String
      address3Code: Int
      address3Name: String
      addressCode: String
    ): PostAddressCodeDefineInfo
    deletePostAddressCodeDefineInfo(
      addressCode: String!
    ): PostAddressCodeDefineInfo
    updatePostAddressCodeDefineInfo(
      countryCode: Int
      countryName: String
      address1Code: Int
      address1Name: String
      address2Code: Int
      address2Name: String
      address3Code: Int
      address3Name: String
      addressCode: String
    ): PostAddressCodeDefineInfo
  }
`;
