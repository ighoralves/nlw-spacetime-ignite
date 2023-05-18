import fastyfi from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastyfi();
const prisma = new PrismaClient();

app.get("/users", async () => {
  const users = await prisma.user.findMany();

  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running on HTTP://localhost:3333");
  });
