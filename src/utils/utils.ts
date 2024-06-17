export const secureImageUrl = (url: string) => {
  if (url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }
  return url;
};
