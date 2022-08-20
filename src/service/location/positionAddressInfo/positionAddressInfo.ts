import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class PositionAddressInfo {
  // #region Read
  positionAddressInfo(usercode: string) {
    return client.positionaddressinfos.findFirst({ where: { usercode } });
  }
  //#endregion

  // #region delete

  //#endregion

  // #region create
  create(usercode, loclatitude, loclongtitude) {
    return client.positionaddressinfos.create({
      data: {
        usercode,
        loclatitude,
        loclongtitude,
      },
    });
  }
  //#endregion

  // #region update
  update_whereUserCodeToState(usercode, loclatitude, loclongtitude) {
    return client.positionaddressinfos.update({
      where: {
        usercode,
      },
      data: {
        loclatitude,
        loclongtitude,
      },
    });
  }
  //#endregion
}

export default PositionAddressInfo;
