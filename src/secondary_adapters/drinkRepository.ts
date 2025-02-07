import { Drink } from "../makeAnOrderToCoffeeMachine";

const drinks = [
  {
    id: "T",
    name: "tea",
  },
  {
    id: "C",
    name: "coffee",
  },
  {
    id: "H",
    name: "chocolate",
  },
];

export const forRetrievingTheDrink = (name: string): Drink => {
  const [drink] = drinks.filter((drink) => drink.name === name);
  return drink;
};
