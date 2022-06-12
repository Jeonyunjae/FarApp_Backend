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
        addressCode,
      },
    });
  }
  //#endregion

  // #region update
  update_whereUserCodeToAddressCode(userCode, addressCode) {
    logManager.Info("usercode"+userCode);
    return client.postAddressInfo.update({
      where: {
        userCode,
      },
      data: {
        addressCode,
      },
    });
  }
  //#endregion
}

export default PostAddressInfo;
