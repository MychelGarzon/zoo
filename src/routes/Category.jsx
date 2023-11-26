import Card from '../components/Card'
import SearchBar from '../components/SearchBar';
import { useParams } from "react-router-dom";

function CategoryPage({ zoo, removeLike, addLike, search, removeHandler }) {
    let urlParams = useParams();
    let category = urlParams.category;

    const filteredData = zoo[category]
        .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <>
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