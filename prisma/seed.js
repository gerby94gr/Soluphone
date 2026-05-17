import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@soluphone.com",
      name: "Admin",
      password: "123456", // luego lo mejoramos con hash
    },
  });
}

main().finally(() => prisma.$disconnect());