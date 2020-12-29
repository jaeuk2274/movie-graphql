import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export let movies = [
    {
      id: 0,
      title: "Star Wars - The new one",
      rating: 1
    },
    {
      id: 1,
      title: "Avengers - The new one",
      rating: 8 
    },
    {
      id: 2,
      title: "The Godfather I",
      rating: 99
    }
]

export const getById = id => {
    const filterMovie = movies.filter(movie => movie.id === id);
    return filterMovie[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
      movies = cleanedMovies;
      return true;
    } else {
      return false;
    }
  };

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length+1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

export const getMovies = (limit, rating) => {
    console.log("getMovies");
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
  };