const toRem = (pixels: number): string => {
  const baseFontSize = 16;
  return `${pixels / baseFontSize}rem`;
};

export default toRem;
