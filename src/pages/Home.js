import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MovieCard from "./components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  })

  const renderMovies = movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        {renderMovies}
      </main>
    </>
  );
};

export default Home;
