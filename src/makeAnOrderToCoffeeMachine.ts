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
export type ForRetrievingDrinkInMemory = (name: string) => string;
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
    const drinkId = forRetrievingTheDrink(drinkName);
    const instruction = forComputingOrderToInstruction(drinkId, sugar);
    const drink = forMakingDrink(instruction, drinkName);

    return drink;
  };
