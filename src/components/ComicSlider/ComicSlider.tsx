import { useRef } from "react";
import { Comic } from "../../types";
import ComicCard from "../ComicCard/ComicCard";
import ComicsSliderStyled from "./ComicSliderStyled";

interface ComicsSliderProps {
  comics: Comic[];
}

const ComicsSlider = ({ comics }: ComicsSliderProps) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    const slider = sliderRef.current;
    if (!isDown || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <ComicsSliderStyled
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {comics.map((comic) => (
        <ComicCard key={comic.comicId} comic={comic} />
      ))}
    </ComicsSliderStyled>
  );
};

export default ComicsSlider;
