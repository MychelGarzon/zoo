import React, { useState } from 'react';
import Card from '../Card.jsx'
import Header from '../components/Header.jsx';
import { animals } from '../animalsList.js'
const Animals = () => {
    const [animalsData, setAnimals] = useState(
        animals);
    const [search, setSearch] = useState("");
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    function removeHandler(name) {
        const updatedArray = animalsData.filter((animals) => animals.name !== name);
        setAnimals(updatedArray);
    };

    const likeHandler = (name, action) => {
        const updatedArray = animalsData.map((animal) => {
            if (animal.name === name) {
                if (action === 'add') {
                    return { ...animal, likes: animal.likes + 1 };
                } else {
                    return { ...animal, likes: animal.likes - 1 };
                }
            } else {
                return animal;
            }
        });
        setAnimals(updatedArray);
    };


    return (
        <>
            <h1>This is Animals</h1>
            <Header />
            <input type="text" onChange={searchHandler} placeholder='Search your favourite animal' />
            <div className="cards">
                {animalsData.filter(animal => animal.name.toLowerCase().includes(search.toLowerCase())).map((animal) => (
                    <Card key={animal.name}
                        {...animal}
                        click={() => removeHandler(animal.name)}
                        addLike={() => likeHandler(animal.name, 'add')}
                        removeLike={() => likeHandler(animal.name, 'remove')}
                    />))}
            </div>




        </>

    )

}

export default Animals;