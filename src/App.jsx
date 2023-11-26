import { useState } from 'react'
import { animals, birds, fishes, insects } from './animalsList.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import SinglePage from './routes/SinglePage.jsx'
import Category from './routes/Category.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

function App() {
  const [search, setSearch] = useState('');
  const [zoo, setZoo] = useState({
    animals: animals, birds: birds, fishes: fishes, insects: insects
  });

  function removeHandler(name, category) {
    const updatedArray = zoo[category].filter((el) => el.name !== name);
    setZoo({ ...zoo, [category]: updatedArray });
  };

  function likeHandler(name, action, category) {
    const updatedArray = zoo[category].map((el) => {
      if (el.name !== name) return el;
      return action === 'add'
        ? { ...el, likes: el.likes + 1 }
        : { ...el, likes: el.likes - 1 };
    });
    setZoo({ ...zoo, [category]: updatedArray });
  }


  const searchHandler = (event) => setSearch(event.target.value);


  const cleanHandler = (event) => {
    setSearch('');
    event.target.reset()
  };


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root searchHandler={searchHandler} cleanHandler={cleanHandler} />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: ":category",
          element: (
            <Category
              zoo={zoo}
              search={search}
              removeHandler={removeHandler}
              addLike={likeHandler}
              removeLike={likeHandler} />
          ),
        },

        { path: ':category/:name', element: <SinglePage zoo={zoo} /> },
        { path: '/about', element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
