import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class PostAddressCodeDefineInfo {
  // #region Read
  postAddressCodeDefineInfo(addressCode: string) {
    return client.postAddressCodeDefineInfo.findFirst({ where: { addressCode } });
  }
  //#endregion



  // #region delete
  
  //#endregion



  // #region create
  
  //#endregion



  // #region update

  //#endregion
}

export default PostAddressCodeDefineInfo;
