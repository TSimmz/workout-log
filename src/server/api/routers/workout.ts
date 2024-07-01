import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc';

export const workoutRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.workout.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });
    }),

  updateName: protectedProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.workout.update({
        data: {
          name: input.name,
        },
        where: { id: input.id },
      });
    }),

  get: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.db.workout.findFirst({
      where: {
        id: input.id,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.workout.findMany();
  }),
});
