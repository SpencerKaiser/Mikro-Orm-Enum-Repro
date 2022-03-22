/* istanbul ignore file */
import { Entity, Enum, Property } from "@mikro-orm/core";
import { ConstructorValues } from "../utils/types";
import { Node } from "./Node";

export type SomethingConstructorValues = ConstructorValues<Something, "yes">;

enum Food {
  Waffles = "Waffles",
  Pancakes = "Pancakes",
  Muffins = "Muffins",
}

@Entity()
export class Something extends Node<Something> {
  @Property({ columnType: "boolean" })
  isAwesome: boolean;

  @Property({ columnType: "text" })
  details: string;

  @Property({ columnType: "text" })
  when: string;

  @Property({ columnType: "text" })
  yes: string = "no";

  @Enum({ items: () => Food })
  favoriteFood: Food;

  constructor({
    isAwesome,
    details,
    when,
    favoriteFood,
  }: SomethingConstructorValues) {
    super();

    this.isAwesome = isAwesome;
    this.details = details;
    this.when = when;
    this.favoriteFood = favoriteFood;
  }
}
