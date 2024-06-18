import { faker } from "@faker-js/faker";
import { comicAPIStructure } from "../../types";

const createMockComic = (
  overrides?: Partial<comicAPIStructure>,
): comicAPIStructure => {
  return {
    id: faker.number.int(),
    title: faker.lorem.words(3),
    dates: [
      {
        type: "onsaleDate",
        date: faker.date.past(),
      },
    ],
    thumbnail: {
      path: faker.image.url(),
      extension: "jpg",
    },
    images: [
      {
        path: faker.image.url(),
        extension: "jpg",
      },
    ],
    ...overrides,
  };
};

export default createMockComic;
