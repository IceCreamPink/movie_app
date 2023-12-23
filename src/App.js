import logo from "./logo.svg";
import "./App.css";
import CircleCard from "./components/circle-card/CircleCard";
import { useState } from "react";
import MoviesList from "./components/movies/MoviesList";

const breedData = [
  {
    img: "https://placehold.co/400x400/000000/FFF",
    title: "Lion",
  },
  {
    img: "https://placehold.co/400x400/orange/FFF",
    title: "Cat",
  },
  {
    img: "https://placehold.co/400x400/red/FFF",
    title: "Bird",
  },
  {
    img: "https://placehold.co/400x400/yellow/FFF",
    title: "Cow",
  },
];

function App() {
  const [cart, setCart] = useState();
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src="/logos/cil_animal.svg" alt="animal" />
          <h2 className="header-title">Moviess</h2>
        </div>
        <span className="header-view-all">{cart} Cart</span>
      </div>
      {/* <div className="card-box">
        {breedData.map((data) => {
          return (
            <CircleCard img={data.img} title={data.title} setCart={setCart} />
          );
        })}
      </div> */}
      <MoviesList />
    </div>
  );
}

export default App;
