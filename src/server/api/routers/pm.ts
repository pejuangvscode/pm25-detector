import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const pmRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.pMReading.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }),
});
