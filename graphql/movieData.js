import fetch from "node-fetch";
import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

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

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: {movie}
    }
  } = await axios(MOVIE_DETAIL_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
}

export const getSuggestions = async id => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
}




// axios 와 fetch
/*
  export const getMovies = (limit, rating) => {
    let REQUEST_URL = LIST_MOVIES_URL;
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
  */