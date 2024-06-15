import SearchBarStyled from "./SearchBarStyled";

interface SearchBarProps {
  onChange: (searchQuery: string) => void;
  query: string;
  totalCharacters: number;
}

const SearchBar = ({ onChange, query, totalCharacters }: SearchBarProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <SearchBarStyled>
      <form className="search-bar__container">
        <img
          src="/images/icons/search_icon.svg"
          alt="Search Icon"
          className="search-bar__icon"
          width={12}
          height={12}
        />
        <label htmlFor="search" className="search-bar__label">
          Search a character
        </label>
        <input
          id="search"
          type="text"
          value={query}
          onChange={handleOnChange}
          placeholder="search a character..."
          className="search-bar__input"
        />
      </form>
      <span className="search-bar__results">{totalCharacters} results</span>
    </SearchBarStyled>
  );
};

export default SearchBar;
