const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function(name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5 //scale of 1-5
    };
    return pet;
};