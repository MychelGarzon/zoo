import Card from '../components/Card'
import { useParams } from "react-router-dom";
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';

function CategoryPage({ zoo, removeLike, addLike, search, removeHandler, searchHandler, cleanHandler }) {
    let urlParams = useParams();
    let category = urlParams.category;

    const filteredData = zoo[category]
        .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <>
            <Navigation />
            <SearchBar onChange={searchHandler} cleanHandler={cleanHandler} />
            {filteredData.map((el) => (
                <Card
                    key={el.name}
                    urlName={el.name}
                    likes={el.likes}
                    removeHandler={() => removeHandler(el.name, category)}
                    addLike={() => addLike(el.name, 'add', category)}
                    removeLike={() => removeLike(el.name, 'remove', category)}
                />
            ))}
        </>
    );
}
export default CategoryPage;