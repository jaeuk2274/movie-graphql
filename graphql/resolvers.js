const jaeuk = {
  name: "jaeuk",
  age: 28,
  gender: "male"
}

const resolvers = {
    Query: {
      person: () => jaeuk
    }
  };
  
  export default resolvers;