import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const movieAPI = async () => {
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);

    setLoading(false);
  };
  useEffect(() => {
    movieAPI();
  }, []);

  return { loading, movies };
}
