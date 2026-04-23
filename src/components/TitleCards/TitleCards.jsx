import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTFlY2FiMWI5NGEzNDUxYmFhOWQ1YTJkYjFiNDBiMyIsIm5iZiI6MTc3NjY5ODYzNy4wMjksInN1YiI6IjY5ZTY0NTBkYzQ0NTU0MjI4M2M3MGQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Rw6Kzz2pzLMN2SKldlBizvlbuurJT80YA_Wxmr5RIU",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    // USED WITH .then()

    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  });

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

// FIGURE THIS OUT LATER

// const fetchMovies = async () => {
//   let movies = [];
//   try {
//     const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
//     const data = await response.json(); // Wait for the JSON conversion
//     movies.push(data.results[0])

//     console.log(movies); // Log the data
//   } catch (error) {
//     console.error(error); // Catch any errors
//   }
// };

// fetchMovies();
