import client from "../../../service/client";
import { protectedResolver } from "../../users/utils/utils";

export default {
  Mutation: {
    uploadProduct: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
            const hashtags = caption.match(/#[\w]+/g);
        }
        
      }
    ),
  },
};