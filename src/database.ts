/* istanbul ignore file */
import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import ormConfig from "./orm.config";

export const initDatabase = async (): Promise<MikroORM<PostgreSqlDriver>> => {
  const orm = await MikroORM.init(ormConfig);

  return orm as MikroORM<PostgreSqlDriver>;
};
