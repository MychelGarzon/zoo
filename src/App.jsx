import { useState } from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SearchBar from './SearchBar.jsx'
import { animals } from './animalsList.js'

function App() {
  const [animalsData, setAnimals] = useState(
    animals
  );

  const removeHandler = (name) => {
    const updatedArray = animals.filter((animals) => animals.name !== name);
    setAnimals(updatedArray);
  };

  return (
    <div>
      <Header />
      <SearchBar />
      <div className="cards">
        {animalsData.map((animals) => (
          <Card
            key={animals.name}
            {...animals}
            onRemove={() => removeHandler(animal.name)}
            addlikes={() => likesHandler(animal.name, "add")}
            click={() => removeHandler(animals.name, "remove")}
          />
        ))}
      </div>

      <Footer footer="@Copyright Mychel Garzon 2023" />

    </div>


  )
}

export default App;


