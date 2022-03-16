export default {
  Mutation: {
    createUserInfo: (_, { userCode, password }) =>
      service.UserInfo.create(userCode, password),
    deleteUserInfo: (_, { id }) => 
      service.UserInfo.update(userCode),
    updateUserInfo: (_, { userCode, password }) =>
      service.UserInfo.update(userCode, password),
  },
};