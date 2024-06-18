import { faker } from "@faker-js/faker";
import { Comic, comicAPIStructure } from "../../types";

const createMockAPIComic = (
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

export const createMockComic = (overrides?: Partial<Comic>): Comic => {
  return {
    comicId: faker.number.int(),
    title: faker.lorem.words(3),
    thumbnail: faker.internet.url(),
    onSaleDate: faker.date.past().getFullYear().toString(),
    ...overrides,
  };
};

export default createMockAPIComic;
