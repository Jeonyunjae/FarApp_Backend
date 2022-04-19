import HashTag from "./market/hashtag/hashTag";
import SellInfo from "./market/sellInfo/sellInfo";
import sellinfo from "./market/sellInfo/sellInfo";
import UserBasicInfo from "./user/userBasicInfo/userBasicInfo";
import UserInfo from "./user/userInfo/userInfo";

class Service{
    UserInfo: UserInfo = null;
    UserBasicInfo: UserBasicInfo = null;
    SellInfo: SellInfo = null;
    HashTag: HashTag = null;
    constructor(){
        this.UserInfo = new UserInfo();
        this.UserBasicInfo = new UserBasicInfo();
        this.SellInfo = new SellInfo();
        this.HashTag = new HashTag();
    }
}

const service = new Service();

export default service;