import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class PostAddressInfo {
  // #region Read
  postAddressInfo(usercode: string) {
    return client.postaddressinfo.findFirst({ where: { usercode } });
  }
  //#endregion

  // #region delete

  //#endregion

  // #region create
  create(usercode, addresscode) {
    return client.postaddressinfo.create({
      data: {
        usercode,
        addresscode,
      },
    });
  }
  //#endregion

  // #region update
  update_whereUserCodeToAddressCode(usercode, addresscode) {
    logManager.Info("usercode"+usercode);
    return client.postaddressinfo.update({
      where: {
        usercode,
      },
      data: {
        addresscode,
      },
    });
  }
  //#endregion
}

export default PostAddressInfo;
