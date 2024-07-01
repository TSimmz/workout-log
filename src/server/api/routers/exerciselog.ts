import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc';

export const exerciseLogRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        date: z.string(),
        notes: z.string(),
        exerciseId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.exerciseLog.create({
        data: {
          date: input.date,
          notes: input.notes,
          exercise: { connect: { id: input.exerciseId } },
        },
      });
    }),

  get: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.db.exerciseLog.findFirst({
      where: {
        id: input.id,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.exerciseLog.findMany();
  }),
});
