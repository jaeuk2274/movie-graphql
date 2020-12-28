import { getById, people } from './db';

const resolvers = {
    Query: {
      people: () => people,
      person: (_, {id} ) => {
        console.log(id);
        console.log(typeof(id)); 
        return getById(id);
    }
  }
}
  
export default resolvers; 