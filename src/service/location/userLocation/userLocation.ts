import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class UserLocation {
  // #region Read
  userLocation(usercode: string) {
    return client.userlocation.findFirst({ where: { usercode } });
  }

  //#endregion

  // #region delete

  //#endregion

  // #region create
  create(usercode, userstate) {
    return client.userlocation.create({
      data: {
        usercode,
        userstate,
      },
    });
  }
  //#endregion

  // #region update
  update_whereUserCodeToState(usercode, userstate){
    return client.userlocation.update({
      where: {
        usercode,
      },
      data: {
        userstate,
      }
    })
  }
  //#endregion
}

export default UserLocation;
