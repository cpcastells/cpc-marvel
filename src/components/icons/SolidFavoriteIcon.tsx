interface FavoriteIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const SolidFavoriteIcon = ({ width, height, className }: FavoriteIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Favorites icon"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.80933L6 0.167709L0 3.80933V11.6128L12 21.844L24 11.6128V3.80933L18 0.167709L12 3.80933Z"
    />
  </svg>
);

export default SolidFavoriteIcon;
