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
        userBasicInfo: true,
      },
    });
  }
  select_WhereUserCodeUnique(unique, userCode) {
    const likeWhere = {
      unique_userdCode: {
        unique: unique,
        userdCode: userCode,
      },
    };
    return client.like.findUnique({
      where: likeWhere,
    });
  }

  //#endregion

  // #region Like delete
  delete_WhereUserCodeUnique(unique, userCode) {
    const likeWhere = {
      unique_userdCode: {
        unique: unique,
        userdCode: userCode,
      },
    };
    return client.like.delete({
      where: likeWhere,
    });
  }
  //#endregion

  // #region Like create
  create(unique, userCode) {
    return client.like.create({
      data: {
        userBasicInfo: {
          connect: {
            userCode: userCode,
          },
        },
        sellInfo: {
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
