import service from "../../../service/service";

export default {
  Query: {
    Query: {
      seeHashtag: (_, { hashtag }) =>
        service.HashTag.HashTag(hashtag)
    },
  },
};
