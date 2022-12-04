import React from "react";
import Movie from "../components/Movie";
import useFetch from "../util/useFetch";

export default function Home() {
  const { loading, movies } = useFetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  );

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
