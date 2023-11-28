const SearchBar = ({ onChange }) => {
    return (
        <input type="text" onChange={onChange} placeholder='Search your favourite animal' />

    );
};

export default SearchBar;
