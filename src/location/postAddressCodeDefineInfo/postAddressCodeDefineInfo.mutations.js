import client from "../../client";
export default {
  Mutation: {
    createPostAddressCodeDefineInfo: (
      _,
      {
        countryCode,
        countryName,
        address1Code,
        address1Name,
        address2Code,
        address2Name,
        address3Code,
        address3Name,
        addressCode,
      }
    ) =>
      client.postAddressCodeDefineInfo.create({
        data: {
          countryCode,
          countryName,
          address1Code,
          address1Name,
          address2Code,
          address2Name,
          address3Code,
          address3Name,
          addressCode,
        },
      }),
    deletePostAddressCodeDefineInfo: (_, { addressCode }) =>
      client.postAddressCodeDefineInfo.delete({ where: { addressCode } }),
    updatePostAddressCodeDefineInfo: (
      _,
      {
        countryCode,
        countryName,
        address1Code,
        address1Name,
        address2Code,
        address2Name,
        address3Code,
        address3Name,
        addressCode,
      }
    ) =>
      client.postAddressCodeDefineInfo.update({
        where: { addressCode },
        data: {
          countryCode,
          countryName,
          address1Code,
          address1Name,
          address2Code,
          address2Name,
          address3Code,
          address3Name,
          addressCode,
        },
      }),
  },
};
