import { useState } from 'react'
import Card from './Card.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import SearchBar from './SearchBar.jsx'
import Root from './Root.jsx'
import Birds from './routes/Birds.jsx'
import Animals from './routes/Animals.jsx'
import About from './routes/About.jsx'
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

  const router = createBrowserRouter([
    { path: '/', element: <Root /> },
    { path: '/birds', element: <Birds /> },
    { path: '/about', element: <About /> },
    { path: '/animals', element: <Animals /> }

  ])


  return (
    <>
      <RouterProvider router={router} />
      {/* <input type="text" onChange={searchHandler} placeholder='Search your favourite animal' />
      <div className="cards">
        {animalsData.filter(animal => animal.name.toLowerCase().includes(search.toLowerCase())).map((animal) => (
          <Card key={animal.name}
            {...animal}
            click={() => removeHandler(animal.name)}
            addLike={() => likeHandler(animal.name, 'add')}
            removeLike={() => likeHandler(animal.name, 'remove')}
          />))}
      </div> */}


    </>


  )
}

export default App;
