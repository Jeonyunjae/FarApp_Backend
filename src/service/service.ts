import HashTag from "./market/hashtag/hashTag";
import SellInfo from "./market/sellInfo/sellInfo";
import UserBasicInfo from "./user/userBasicInfo/userBasicInfo";
import UserInfo from "./user/userInfo/userInfo";
import Like from "./market/like/like";
import PostAddressInfo from "./location/postAddressInfo/postAddressInfo";
import PositionAddressInfo from "./location/positionAddressInfo/positionAddressInfo";
import UserLocation from "./location/userLocation/userLocation";
import PostAddressCodeDefineInfo from "./location/postAddressCodeDefineInfo/postAddressCodeDefineInfo";

class Service {
  UserInfo: UserInfo = null;
  UserBasicInfo: UserBasicInfo = null;
  SellInfo: SellInfo = null;
  HashTag: HashTag = null;
  Like: Like = null;
  PositionAddressInfo: PositionAddressInfo = null;
  PostAddressInfo: PostAddressInfo = null;
  UserLocation: UserLocation = null;
  PostAddressCodeDefineInfo: PostAddressCodeDefineInfo = null;

  constructor() {
    this.UserInfo = new UserInfo();
    this.UserBasicInfo = new UserBasicInfo();
    this.SellInfo = new SellInfo();
    this.HashTag = new HashTag();
    this.Like = new Like();

    this.UserLocation = new UserLocation();
    this.PositionAddressInfo = new PositionAddressInfo();
    this.PostAddressInfo = new PostAddressInfo();
    this.PostAddressCodeDefineInfo = new PostAddressCodeDefineInfo();
  }
}

const service = new Service();

export default service;
