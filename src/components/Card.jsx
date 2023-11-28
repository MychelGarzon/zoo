import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ urlName, likes, removeLike, addLike, removeHandler, category }) => {
    return (

        <div className="box">
            <div className='cardHeader'>
                <p id="animalName">{urlName}</p>
                <button id="closing" onClick={removeHandler}><span className="material-symbols-outlined">
                    delete
                </span> </button>
            </div>
            <img src={`https://source.unsplash.com/400x400/?${urlName},${category}`} alt="picture" />
            <div className="container">
                <div className="buttons">
                    <div className='likes-container'>
                        <button onClick={removeLike} id="buttonMinus">
                            <span className="material-symbols-outlined">
                                heart_minus
                            </span>
                        </button>
                        <p className="likes">{likes}</p>
                        <span id="likeHeart" className="material-symbols-outlined">
                            {likes >= 0 ? 'favorite' : 'heart_broken'}
                        </span>
                        <button onClick={addLike}>
                            <span className="material-symbols-outlined">
                                heart_plus
                            </span>
                        </button>
                    </div>
                </div>
                <Link to={urlName.toLowerCase()}><h4>See More</h4></Link>
            </div>
        </div>
    );
}

export default Card;
