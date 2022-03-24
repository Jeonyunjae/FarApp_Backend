import userbasicinfo from "./user/userBasicInfo/userBasicInfo";
import userinfo from "./user/userInfo/userInfo";

class Service{
    UserInfo: any = null;
    UserBasicInfo: any = null;
    constructor(){
        this.UserInfo = new userinfo();
        this.UserBasicInfo = new userbasicinfo();
    }
}

const service = new Service();

export default service;