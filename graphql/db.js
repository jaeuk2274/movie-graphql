export const people = [
    {
        id : 0,
        name: "zero",
        age: 20,
        gender: "male"
    },
    {
        id : 1,
        name: "one",
        age: 21,
        gender: "male"
    },
    {
        id : 2,
        name: "two",
        age: 21,
        gender: "male"
    },
    {
        id : 3,
        name: "three",
        age: 21,
        gender: "male"
    },
    {
        id : 4,
        name: "four",
        age: 21,
        gender: "female"
    },
    {
        id : 5,
        name: "five",
        age: 21,
        gender: "male"
    }
]   

export const getById = id => {
    const filterPeople = people.filter(person => person.id === id);
    return filterPeople[0];
}