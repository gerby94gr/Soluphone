const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.order.create({
    data: {
      deviceType: "Celular",
      brand: "Samsung",
      model: "A32",
      problem: "Pantalla rota",

      partsCost: 20000,
      laborCost: 10000,
      finalPrice: 45000,

      client: {
        create: {
          name: "Juan Pérez",
          phone: "123456"
        }
      }
    }
  });

  console.log("✔ Orden creada correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });