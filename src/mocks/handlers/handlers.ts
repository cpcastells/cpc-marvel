import { http, HttpResponse } from "msw";
import createMockCharacter from "../factories/characterFactory";
import createMockComic from "../factories/comicFactory";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiURL}/public/characters`, (request) => {
    const url = new URL(request.request.url);
    const query = url.searchParams.get("nameStartsWith");

    if (!query) {
      return HttpResponse.json({
        code: 200,
        status: "Ok",
        data: {
          offset: 0,
          limit: 50,
          total: 2,
          count: 2,
          results: [
            createMockCharacter({ name: "Spiderman" }),
            createMockCharacter({ name: "Hulk" }),
          ],
        },
        etag: "1234567890",
      });
    }

    return HttpResponse.json({
      code: 200,
      status: "Ok",
      data: {
        offset: 0,
        limit: 50,
        total: 2,
        count: 2,
        results: [
          createMockCharacter({ name: "Astarion" }),
          createMockCharacter({ name: "Astaroth" }),
        ],
      },
      etag: "1234567893",
    });
  }),

  http.get(`${apiURL}/public/characters/:characterId`, (req) => {
    const { characterId } = req.params;
    if (characterId === "1234") {
      return HttpResponse.json({
        code: 200,
        status: "Ok",
        data: {
          results: [
            createMockCharacter({
              name: "Spiderman",
              description: "A hero with spider-like abilities.",
              thumbnail: {
                path: "path/to/spiderman",
                extension: "jpg",
              },
            }),
          ],
        },
      });
    }
  }),

  http.get(`${apiURL}/public/comics/:comicId`, (req) => {
    const { comicId } = req.params;
    return HttpResponse.json({
      code: 200,
      status: "Ok",
      data: {
        results: [
          createMockComic({
            id: Number(comicId),
            title: `Comic ${comicId}`,
            thumbnail: {
              path: `path/to/comic${comicId}`,
              extension: "jpg",
            },
            dates: [
              {
                type: "onsaleDate",
                date: new Date(Number(comicId), 1, 1),
              },
            ],
          }),
        ],
      },
    });
  }),
];
