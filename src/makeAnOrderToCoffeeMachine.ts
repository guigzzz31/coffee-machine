export type DrinkName = "tea" | "coffee" | "chocolate";

export type Drink = {
  id: string;
  name: string;
};

export type Order = {
  id: string;
  drink: Drink;
  sugar: number;
};

// Secondary Ports
export type ForRetrievingDrinkInMemory = (name: string) => Drink;

export type ForComputingOrderToInstruction = (
  drinkId: string,
  sugar: number
) => string;

export type ForMakingTheDrink = (
  instruction: string,
  drinkName: string
) => string;

// Primary Ports
export type IMakeAnOrderToCoffeeMachine = (
  forRetrievingTheDrink: ForRetrievingDrinkInMemory,
  forComputingOrderToInstruction: ForComputingOrderToInstruction,
  forMakingDrink: ForMakingTheDrink
) => (drink: string, sugar: number) => string;

export const makeAnOrderToCoffeeMachine: IMakeAnOrderToCoffeeMachine =
  (forRetrievingTheDrink, forComputingOrderToInstruction, forMakingDrink) =>
  (drinkName: string, sugar: number) => {
    const { id, name } = forRetrievingTheDrink(drinkName);
    const instruction = forComputingOrderToInstruction(id, sugar);
    const drink = forMakingDrink(instruction, name);

    return drink;
  };
