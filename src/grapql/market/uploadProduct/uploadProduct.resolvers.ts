import client from "../../../service/client";
import service from "../../../service/service";
import { protectedResolver } from "../../users/utils/utils";
import { nanoid } from 'nanoid'

export default {
  Mutation: {
    uploadProdct: protectedResolver(
      async (_, { picture, mainComment, subComment, amount, categoryCode }, { loggedInUser }) => {
        let hashtagObj = [];
        let unique, transaction = null;
        if (mainComment) {
          const hashtags = mainComment.match(/#[\w]+/g);
          hashtagObj = hashtags.map((hashtag) => ({
            where: { hashtag },
            create: { hashtag },
          }));
        }
        unique = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
        transaction = 0;
        return service.SellInfo.create(
          unique,
          loggedInUser.userCode,
          mainComment,
          subComment,
          picture,
          amount,
          transaction,
          hashtagObj,
          categoryCode
        );
      }
    ),
  },
};