import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class PositionAddressInfo {
  // #region Read
  positionAddressInfo(userCode: string) {
    return client.positionAddressInfo.findFirst({ where: { userCode } });
  }
  //#endregion

  // #region delete

  //#endregion

  // #region create
  create(userCode, locLatitude, locLongtitude) {
    return client.positionAddressInfo.create({
      data: {
        userCode,
        locLatitude,
        locLongtitude,
      },
    });
  }
  //#endregion

  // #region update

  //#endregion
}

export default PositionAddressInfo;
