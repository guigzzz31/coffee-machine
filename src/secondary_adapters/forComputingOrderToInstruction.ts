export const forComputingOrderToInstruction = (
  drinkId: string,
  sugar: number
): string => {
  if (sugar === 0) return `${drinkId}::`;
  else return `${drinkId}:${sugar}:0`;
};
