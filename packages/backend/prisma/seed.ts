import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const seedData: Prisma.ProductCreateInput[] = await import(
    './seed-data.json'
  );

  for (const product of seedData) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
