/**
 * Converts pixels to rem units based on a base font size.
 *
 * @param {number} pixels - The value in pixels to convert to rem.
 * @param {number} [baseFontSize=16] - The base font size to use for the conversion. Defaults to 16.
 * @returns {string} The value converted to rem units.
 */

const toRem = (pixels: number): string => {
  const baseFontSize = 16;
  return `${pixels / baseFontSize}rem`;
};

export default toRem;
