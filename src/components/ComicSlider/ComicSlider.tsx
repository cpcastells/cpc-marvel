import { Comic } from "../../types";
import ComicCard from "../ComicCard/ComicCard";
import ComicsSliderStyled from "./ComicSliderStyled";

interface ComicsSliderProps {
  comics: Comic[];
}

const ComicsSlider = ({ comics }: ComicsSliderProps) => (
  <ComicsSliderStyled>
    {comics.map((comic) => (
      <ComicCard key={comic.comicId} comic={comic} />
    ))}
  </ComicsSliderStyled>
);

export default ComicsSlider;
