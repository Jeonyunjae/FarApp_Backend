import service from "../../../service/service";

export default {
  Query: {
    seeHashtag: (_, { hashtag }) => service.HashTag.hashTag(hashtag),
  },
};
