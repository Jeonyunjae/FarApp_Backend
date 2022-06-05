import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class PostAddressInfo {
  // #region Read
  postAddressInfo(userCode: string) {
    return client.postAddressInfo.findFirst({ where: { userCode } });
  }
  //#endregion



  // #region delete
  
  //#endregion



  // #region create
  create(userCode, addressCode) {
    return client.postAddressInfo.create({
      data: {
        userCode,
        addressCode
      },
    });
  }
  //#endregion



  // #region update

  //#endregion
}

export default PostAddressInfo;
