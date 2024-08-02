import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.create({
    data: {
      title: 'Exploring the Mountains',
      content: 'Had an amazing hike today! The view from the top was absolutely breathtaking. #mountains #hiking',
      imageUrl: 'https://example.com/mountains.jpg',
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Delicious Homemade Pizza',
      content: 'Made this delicious pizza from scratch. Cheese, pepperoni, and a lot of love! 🍕 #homemade #pizza',
      imageUrl: 'https://example.com/pizza.jpg',
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: 'Sunset by the Beach',
      content: 'Caught this stunning sunset at the beach today. Nature is truly beautiful. #sunset #beachlife',
      imageUrl: 'https://example.com/sunset.jpg',
    },
  });

  const post4 = await prisma.post.create({
    data: {
      title: 'Morning Coffee Ritual',
      content: 'Starting my day right with a cup of freshly brewed coffee. ☕️ #coffee #morningritual',
      imageUrl: 'https://example.com/coffee.jpg',
    },
  });

  const post5 = await prisma.post.create({
    data: {
      title: 'City Lights at Night',
      content: 'The city comes alive at night with all these beautiful lights. #citylights #nightlife',
      imageUrl: 'https://example.com/citylights.jpg',
    },
  });

  console.log({ post1, post2, post3, post4, post5 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
