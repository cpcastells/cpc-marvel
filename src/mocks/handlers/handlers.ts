import { http, HttpResponse } from "msw";
import createMockCharacter from "../factories/characterFactory";

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
];
