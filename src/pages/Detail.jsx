import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../util/useFetch";

export default function Detail() {
  const { movieId } = useParams();
  const { loading, movies } = useFetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
  );

  return <div>Detail</div>;
}
