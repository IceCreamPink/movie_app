import "./App.css";
import MoviesList from "./components/movies/MoviesList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src="/logos/cil_animal.svg" alt="animal" />
          <h2 className="header-title">Moviess</h2>
        </div>
      </div>

      <MoviesList />
    </div>
  );
}

export default App;
