import { pick } from 'lodash';

const commentGenerator = (() => {
  let i = 0;

  return () => ({
    id: i++,
    user: 'John Doe',
    text: 'Nice ❤️ 💪'
  });
})();

const imageGenerator = (() => {
  let i = 0;

  return () => ({
    id: i,
    url: `/images/img${i++ % 5 + 1}.jpeg`,
    likes: Math.floor(Math.random() * 10000),
    comments: new Array(Math.floor(Math.random() * 8) + 1).fill(null).map(commentGenerator),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales eros et quam fringilla, sed faucibus metus iaculis. Nam sed tristique libero. Suspendisse dignissim neque in nisi ullamcorper pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et interdum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec dolor a libero rhoncus porta ac in lectus.'
  });
})();

const images = new Array(20).fill(null).map(imageGenerator);

export const getImages = async () => ({
  data: {
    images: images.map((img) => pick(img, ['id', 'url', 'likes']))
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
