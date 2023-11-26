import { useParams, useNavigate } from 'react-router-dom'
const SinglePage = ({ zoo }) => {
    let urlParams = useParams();
    const navigate = useNavigate();
    const category = urlParams.category;
    const urlName = urlParams.name;
    const data = zoo[category].find((el) => el.name.toLowerCase() === urlName)


    return (
        <>
            <div>
                <img src={`https://source.unsplash.com/400x400/?${urlName},${category}`} alt="picture" />
                <h2>{data.name}</h2>
                <p>Likes: {data.likes}</p>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        </>
    )
}

export default SinglePage;