import { faker } from "@faker-js/faker";
import { Character } from "../../types";

const createMockCharacter = (overrides?: Partial<Character>): Character => {
  return {
    id: faker.number.int(),
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
    thumbnail: {
      path: faker.image.url(),
      extension: faker.system.fileExt(),
    },
    comics: {
      available: faker.number.int({ min: 0, max: 100 }),
      returned: faker.number.int({ min: 0, max: 100 }),
      items: [
        {
          resourceURI: faker.internet.url(),
          name: faker.lorem.words(3),
        },
      ],
    },
    ...overrides,
  };
};

export default createMockCharacter;
