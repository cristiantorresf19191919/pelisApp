import React from 'react';
import { Card } from './components/organism/Card';
import { NavBar } from "./components/organism/NavBar";

const movies = [{ image: 'imagen.png', title: 'Intensamente' }, { image: 'imagen2.jpg', title: 'Advengers' }, { image: 'imagen.png', title: 'LaLa Land' }, { image: 'imagen1.jpg', title: 'Zonic' }, { image: 'imagen1.jpg', title: 'El conjuro' }];

function App() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie) => (
          <Card key={movie.title} image={movie.image} title={movie.title} />
        ))}
      </div>
    </>
  );
}

export default App;
