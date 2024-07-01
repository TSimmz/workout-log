import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc';

export const exerciseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        workoutId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.exercise.create({
        data: {
          name: input.name,
          workout: { connect: { id: input.workoutId } },
        },
      });
    }),

  updateName: protectedProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.exercise.update({
        data: {
          name: input.name,
        },
        where: { id: input.id },
      });
    }),

  get: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.db.exercise.findFirst({
      where: {
        id: input.id,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.exercise.findMany();
  }),
});
