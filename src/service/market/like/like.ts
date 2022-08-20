import { logManager } from "../../../utilty/logManager/\blogManager";
import client from "../../client";

class Like {
  // #region Like Read
  like(id) {
    return client.like.findFirst({ where: { id: id } });
  }

  count_WhereUnique(unique: string) {
    return client.like.count({ where: { unique: unique } });
  }

  select_WhereUnique_SelectUserBasicInfo(unique) {
    return client.like.findMany({
      where: {
        unique: unique,
      },
      select: {
        userbasicinfo: true,
      },
    });
  }
  select_WhereUserCodeUnique(unique, usercode) {
    const likeWhere = {
      unique_usercode: {
        unique: unique,
        usercode: usercode,
      },
    };
    return client.like.findUnique({
      where: likeWhere,
    });
  }

  //#endregion

  // #region Like delete
  delete_WhereUserCodeUnique(unique, usercode) {
    const likeWhere = {
      unique_usercode: {
        unique: unique,
        usercode: usercode,
      },
    };
    return client.like.delete({
      where: likeWhere,
    });
  }
  //#endregion

  // #region Like create
  create(unique, usercode) {
    return client.like.create({
      data: {
        userbasicinfo: { 
          connect: {
            usercode: usercode,
          },
        },
        sellinfo: {
          connect: {
            unique: unique,
          },
        },
      },
    });
  }
  //#endregion

  // #region Like update

  //#endregion
}

export default Like;
