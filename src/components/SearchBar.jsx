const SearchBar = ({ onChange, searchHandler }) => {
    return (
        <input type="text" onChange={searchHandler} placeholder='Search your favourite animal' />
    );
};

export default SearchBar;
