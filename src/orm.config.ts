/* istanbul ignore file */
import { EntityCaseNamingStrategy, Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const migrationsPath = `${__dirname}/migrations`;
const migrationFileRegex = /^\d+[\w-]+.(ts|js)$/;

export default {
  type: "postgresql" as const,
  clientUrl: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  entities: [`${__dirname}/entities/*.js`],
  entitiesTs: [`${__dirname}/entities/*.ts`],
  forceUndefined: true,
  debug: process.env.NODE_ENV !== "production",
  namingStrategy: EntityCaseNamingStrategy, // Camel case property and table names
  driverOptions: {
    connection: {
      ssl:
        process.env.NODE_ENV === "production"
          ? {
              rejectUnauthorized: false,
              sslmode: "require",
            }
          : undefined,
    },
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "migrations",
    path: migrationsPath,
    pattern: migrationFileRegex,
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: false, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    safe: false, // allow to disable table and column dropping
    emit: "ts",
    snapshot: false,
  },
} as Options<PostgreSqlDriver>;
