import LoaderBarStyled from "./LoaderBarStyled";

interface LoaderBarProps {
  isLoading: boolean;
}

const LoaderBar = ({ isLoading }: LoaderBarProps) => {
  return <LoaderBarStyled aria-label="Loading bar" $isLoading={isLoading} />;
};

export default LoaderBar;
