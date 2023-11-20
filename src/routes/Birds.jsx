import React, { useState } from 'react';
import Card from '../Card.jsx'
import Header from '../components/Header.jsx';
import Navigation from '../components/Navigation.jsx';
import { birds } from '../birdsList.js'

const Birds = () => {
    const [birdsData, setBirds] = useState(
        birds);
    const [search, setSearch] = useState("");
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    function removeHandler(name) {
        const updatedArray = birdsData.filter((birds) => birds.name !== name);
        setBirds(updatedArray);
    };

    const likeHandler = (name, action) => {
        const updatedArray = birdsData.map((bird) => {
            if (bird.name === name) {
                if (action === 'add') {
                    return { ...bird, likes: bird.likes + 1 };
                } else {
                    return { ...bird, likes: bird.likes - 1 };
                }
            } else {
                return bird;
            }
        });
        setBirds(updatedArray);
    };


    return (
        <>
            <Navigation />
            <h1>Birds</h1>
            <input type="text" onChange={searchHandler} placeholder='Search your favourite bird' />
            <div className="cards">
                {birdsData.filter(bird => bird.name.toLowerCase().includes(search.toLowerCase())).map((bird) => (
                    <Card key={bird.name}
                        {...bird}
                        click={() => removeHandler(bird.name)}
                        addLike={() => likeHandler(bird.name, 'add')}
                        removeLike={() => likeHandler(bird.name, 'remove')}
                    />))}
            </div>
        </>

    )

}

export default Birds;