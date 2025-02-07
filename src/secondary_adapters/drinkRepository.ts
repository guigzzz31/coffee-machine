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

export const forRetrievingTheDrink = (name: string): string => {
  const [drink] = drinks.filter((drink) => drink.name === name);
  return drink.id;
};
