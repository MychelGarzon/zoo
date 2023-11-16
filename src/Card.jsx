import React from 'react';

const Card = ({ click, name, likes, removeLike, addLike }) => {
    return (

        <div className="box">
            <button id="closing" onClick={click}>x</button>

            <img src={`https://source.unsplash.com/400x400/?${name}`} alt="picture" />
            <p id="animalName">{name}</p>
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
            </div>
        </div>
    );
}

export default Card;
