import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc';

export const setRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        reps: z.number(),
        weight: z.number(),
        units: z.string(),
        exerciseId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.set.create({
        data: {
          reps: input.reps,
          weight: input.weight,
          units: input.units,
          exercise: { connect: { id: input.exerciseId } },
        },
      });
    }),
});
