import { useState } from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SearchBar from './SearchBar.jsx'
import { animals } from './animalsList.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function App() {
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

      <Footer footer="@Copyright Mychel Garzon 2023" />

    </>


  )
}

export default App;
