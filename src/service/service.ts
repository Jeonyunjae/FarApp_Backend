import sellinfo from "./market/sellInfo/sellInfo";
import userbasicinfo from "./user/userBasicInfo/userBasicInfo";
import userinfo from "./user/userInfo/userInfo";

class Service{
    UserInfo: any = null;
    UserBasicInfo: any = null;
    SellInfo: any = null;
    constructor(){
        this.UserInfo = userinfo;
        this.UserBasicInfo = userbasicinfo;
        this.SellInfo = sellinfo;
    }
}

const service = new Service();

export default service;