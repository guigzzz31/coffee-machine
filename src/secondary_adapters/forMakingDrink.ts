const _handleSugarAndStick = (sugar: string): string => {
  if (sugar === "") return "no sugar - and therefore no stick";

  if (sugar === "1") return "1 sugar and a stick";
  else return `${sugar} sugars and a stick`;
};

export const forMakingDrink = (
  instruction: string,
  drinkName: string
): string => {
  const [_drink, sugar, _stick] = instruction.split(":");

  return `Drink maker makes 1 ${drinkName} with ${_handleSugarAndStick(sugar)}`;
};
