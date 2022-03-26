# FarApp_Backend


- [ ] Create Account
- [ ] See Profile
- [ ] Login
- [ ] Edit Profile
- [ ] Follow User
- [ ] Unfollow User
- [ ] Change Avatar (Image Upload)




===========파일 업로드 할때================
mutation($avatar: Upload) {
  editProfile(
    userCode: "1111"
    password: "1111"
    phoneNumber: "1111"
    email: "string"
    avatar: $avatar
  ) {
    ok
    error
  }
}
