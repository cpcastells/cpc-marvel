import { Comic } from "../../types";
import ComicCardStyled from "./ComicCardStyled";

interface ComicCardProps {
  comic: Comic;
}

const ComicCard = ({ comic }: ComicCardProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  return (
    <ComicCardStyled onDragStart={handleDragStart}>
      <div className="comic__image-container">
        <img src={comic.thumbnail} alt={`Image of ${comic.title}`} />
      </div>
      <div className="comic__info-container">
        <h3 className="comic__title">{comic.title}</h3>
        <div className="comic__date">{comic.onSaleDate}</div>
      </div>
    </ComicCardStyled>
  );
};

export default ComicCard;
