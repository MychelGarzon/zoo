import { useState } from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Image from './assets/dog.jpg'



function App() {
  const [animals, setAnimals] = useState([
    { id: 1, name: "Dog", },
    { id: 2, name: "Cat", },


  ])
  return (
    <div>
      <Header />
      <div class="cards">
        {animals.map(animal => (
          <Card key={animal.id} id={animal.id} name={animal.name} />))

        }
        <Footer footer="@Copyright Mychel Garzon 2023" />

      </div>
    </div >

  )
}

export default App;


