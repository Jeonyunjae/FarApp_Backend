import { gql } from "apollo-server";

export default gql`
  type CategoryCodeDefineInfo {
    category1Code: Int
    category1Name: String
    category2Code: Int
    category2Name: String
    category3Code: Int
    category3Name: String
    category4Code: Int
    category4Name: String
    categoryCode: String
    sellInfo: [SellInfo]
  }
`;