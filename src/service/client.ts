import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  errorFormat: "pretty",
});

export default client;