import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation';
const SinglePage = ({ zoo }) => {
    let urlParams = useParams();
    const navigate = useNavigate();
    const category = urlParams.category;
    const urlName = urlParams.name;
    const data = zoo[category].find((el) => el.name.toLowerCase() === urlName)


    return (
        <>
            <Navigation />
            <div className='singlePageInfo'>
                <h2>{data.name}</h2>
                <img src={`https://source.unsplash.com/600x600/?${urlName},${category}`} alt="picture" />
                <p>Likes: {data.likes}</p>
                <button onClick={() => navigate(-1)}>Return</button>
            </div>
        </>
    )
}

export default SinglePage;