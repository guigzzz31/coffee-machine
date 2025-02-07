import { Drink } from "../makeAnOrderToCoffeeMachine";

const drinks = [
  {
    id: "T",
    name: "tea",
    price: 0.4,
  },
  {
    id: "C",
    name: "coffee",
    price: 0.5,
  },
  {
    id: "H",
    name: "chocolate",
    price: 0.6,
  },
];

export const forRetrievingTheDrink = (name: string): Drink => {
  const [drink] = drinks.filter((drink) => drink.name === name);
  return drink;
};
