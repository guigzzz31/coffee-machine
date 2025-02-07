import test from "node:test";
import assert from "node:assert";

import { makeAnOrderToCoffeeMachine } from "./makeAnOrderToCoffeeMachine.ts";
import {
  forRetrievingATea,
  forRetrievingACoffee,
  forRetrievingAChocolate,
} from "./secondary_adapters/drinkRepository.double.ts";
import { forComputingOrderToInstruction } from "./secondary_adapters/forComputingOrderToInstruction.ts";
import { forMakingDrink } from "./secondary_adapters/forMakingDrink.ts";

test("When the customer order a tea with no sugar, then the machine returns him a tea with no sugar and without stick", () => {
  const makeAnOrderInitialized = makeAnOrderToCoffeeMachine(
    forRetrievingATea,
    forComputingOrderToInstruction,
    forMakingDrink
  );

  const result = makeAnOrderInitialized("tea", 0);

  assert.strictEqual(
    result,
    "Drink maker makes 1 tea with no sugar - and therefore no stick"
  );
});

test("When the customer order a coffee with 2 sugars, then the machine returns him a coffee with 2 sugars and a stick", () => {
  const makeAnOrderInitialized = makeAnOrderToCoffeeMachine(
    forRetrievingACoffee,
    forComputingOrderToInstruction,
    forMakingDrink
  );

  const result = makeAnOrderInitialized("coffee", 2);

  assert.strictEqual(
    result,
    "Drink maker makes 1 coffee with 2 sugars and a stick"
  );
});

test("When the customer order a chocolate with 1 sugar, then the machine returns him a tea with 1 sugar and a stick", () => {
  const makeAnOrderInitialized = makeAnOrderToCoffeeMachine(
    forRetrievingAChocolate,
    forComputingOrderToInstruction,
    forMakingDrink
  );

  const result = makeAnOrderInitialized("chocolate", 1);

  assert.strictEqual(
    result,
    "Drink maker makes 1 chocolate with 1 sugar and a stick"
  );
});
