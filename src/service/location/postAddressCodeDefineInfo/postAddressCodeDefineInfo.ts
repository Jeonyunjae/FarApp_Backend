import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class PostAddressCodeDefineInfo {
  // #region Read
  postAddressCodeDefineInfo(addresscode: string) {
    return client.postaddresscodedefineinfo.findFirst({ where: { addresscode } });
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
