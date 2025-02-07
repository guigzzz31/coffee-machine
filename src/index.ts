import Fastify from "fastify";

import { forRetrievingTheDrink } from "./secondary_adapters/drinkRepository.ts";
import { makeAnOrderToCoffeeMachine } from "./makeAnOrderToCoffeeMachine.ts";
import { forComputingOrderToInstruction } from "./secondary_adapters/forComputingOrderToInstruction.ts";
import { forMakingDrink } from "./secondary_adapters/forMakingDrink.ts";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler(request, reply) {
  return { hello: "port & adapters" };
});

fastify.post<{ Body: { drink: string; sugar: number } }>(
  "/order",
  async function handler(request, reply) {
    const { drink, sugar } = request.body;

    const makeAnOrderInitialized = makeAnOrderToCoffeeMachine(
      forRetrievingTheDrink,
      forComputingOrderToInstruction,
      forMakingDrink
    );

    const result = makeAnOrderInitialized(drink, sugar);

    return { order: result };
  }
);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
