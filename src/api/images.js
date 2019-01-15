import faker from 'faker';
import { pick } from 'lodash';

const imagesN = 20;
const videosList = [2, 4];
const videosN = videosList.length;

const commentGenerator = (() => {
  let i = 0;

  const possibleEmojis = ["❤️", "💪", "🔥", "😂", "😅", "😜", "😆", "😍", "🎉"];

  return () => {
    const emojis = new Array(faker.random.number({ min: 0, max: 5 })).fill(null).map(() => faker.random.arrayElement(possibleEmojis));

    return {
      id: i++,
      user: `${faker.name.firstName()} ${faker.name.lastName()}`,
      text: `${faker.lorem.sentence(5)} ${emojis.join('')}`
    };
  };
})();

const imageGenerator = (() => {
  let i = 0;
  let j = 0;
  
  return () => {
    const id = i + j;

    if (videosList[j] === id) {
      return {
        id,
        video: `/videos/vid${j++ % videosN + 1}.mp4`,
        likes: Math.floor(Math.random() * 10000),
        comments: new Array(Math.floor(Math.random() * 8) + 1).fill(null).map(commentGenerator),
        description: faker.lorem.paragraphs(3)
      };
    }

    return {
      id,
      url: `/images/img${i++ % imagesN + 1}.jpeg`,
      likes: Math.floor(Math.random() * 10000),
      comments: new Array(Math.floor(Math.random() * 8) + 1).fill(null).map(commentGenerator),
      description: faker.lorem.paragraphs(3)
    };
  };
})();

const images = new Array(imagesN + videosN).fill(null).map(imageGenerator);

export const getImages = async () => ({
  data: {
    images: images.map((img) => pick(img, ['id', 'url', 'likes', 'video']))
  }
})

export const getImageById = async (id) => {
  await new Promise((res) => setTimeout(res, 600));

  return {
    data: {
      image: images.find(img => img.id === id)
    }
  }
}
