import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class UserLocation {
  // #region Read
  userLocation(userCode: string) {
    return client.userLocation.findFirst({ where: { userCode } });
  }

  //#endregion

  // #region delete

  //#endregion

  // #region create
  create(userCode, userState) {
    return client.userLocation.create({
      data: {
        userCode,
        userState,
      },
    });
  }
  //#endregion

  // #region update
  update_whereUserCodeToState(userCode, userState){
    return client.userLocation.update({
      where: {
        userCode,
      },
      data: {
        userState,
      }
    })
  }
  //#endregion
}

export default UserLocation;
