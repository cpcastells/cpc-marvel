export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    returned: number;
    items: {
      resourceURI: string;
      name: string;
    }[];
  };
}

export interface Comic {
  comicId: number;
  title: string;
  thumbnail: string;
  onSaleDate: string;
}

export interface comicAPIStructure {
  id: number;
  title: string;
  dates: [
    {
      type: string;
      date: Date;
    },
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: [
    {
      path: string;
      extension: string;
    },
  ];
}

export interface GetCharactersAPIResponse {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
  etag: string;
}

export interface GetComicAPIResponse {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: comicAPIStructure[];
  };
  etag: string;
}
