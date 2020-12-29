import { getById as peopleGetById, people } from './db';
import { getMovie, addMovie, deleteMovie, getMovies, getSuggestions } from './movieData';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id} ) => peopleGetById(id),
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, {id}) => getMovie(id),
    suggestions: (_, {id}) => getSuggestions(id)
  },
  Mutation: {
    deleteMovie: (_, { id }) => deleteMovie(id),
    addMovie: (_, { name, score }) => addMovie(name,score)
  }
}

  
export default resolvers;  