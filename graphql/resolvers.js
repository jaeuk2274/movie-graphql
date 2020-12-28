import { getById as peopleGetById, people } from './db';
import { getById, movies, addMovie, deleteMovie } from './movieData';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id} ) => peopleGetById(id),
    movies: () => movies,
    movie: (_, {id}) => getById(id)
  },
  Mutation: {
    deleteMovie: (_, { id }) => deleteMovie(id),
    addMovie: (_, { name, score }) => addMovie(name,score)
  }
}

  
export default resolvers;  