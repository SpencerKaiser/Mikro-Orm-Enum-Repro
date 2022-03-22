import { Migration } from '@mikro-orm/migrations';

export class Migration20220322202513 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Something" ("id" bigserial primary key, "createdAt" timestamptz(0) not null default clock_timestamp(), "updatedAt" timestamptz(0) not null default clock_timestamp(), "isAwesome" boolean not null, "details" text not null, "when" text not null, "yes" text not null, "favoriteFood" text check ("favoriteFood" in (\'Waffles\', \'Pancakes\', \'Muffins\')) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "Something" cascade;');
  }

}
