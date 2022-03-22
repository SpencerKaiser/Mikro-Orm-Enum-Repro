import { initDatabase } from "./database";
import dotenv from "dotenv";
import { Something } from "./entities/Something";

dotenv.config();

void (async () => {
  const orm = await initDatabase();

  const em = orm.em.fork();

  const id: any = "1";
  const thing = await em.findOne(Something, { id });
  console.log(thing);
});
