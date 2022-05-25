import HashTag from "./market/hashtag/hashTag";
import SellInfo from "./market/sellInfo/sellInfo";
import UserBasicInfo from "./user/userBasicInfo/userBasicInfo";
import UserInfo from "./user/userInfo/userInfo";
import Like from "./market/like/like"

class Service{
    UserInfo: UserInfo = null;
    UserBasicInfo: UserBasicInfo = null;
    SellInfo: SellInfo = null;
    HashTag: HashTag = null;
    Like: Like = null;
    constructor(){
        this.UserInfo = new UserInfo();
        this.UserBasicInfo = new UserBasicInfo();
        this.SellInfo = new SellInfo();
        this.HashTag = new HashTag();
        this.Like = new Like();
    }
}

const service = new Service();

export default service;