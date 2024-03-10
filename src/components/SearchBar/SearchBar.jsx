
import css from "./SearchBar.module.css"

const SearchBar = ({ inputValue, setInputValue }) => {

    const handleChange = (evt) => {

        setInputValue(evt.target.value);
    };

    return (
        <div>
            <p className={css.searchText}>Find contacts by name</p>
            <input className={css.inputSearch }type="text" value={inputValue} onChange={handleChange} />

        </div>
    );
};

export default SearchBar;
