const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function(name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, //scale of 1-10 where 1 is rested and 10 is shattered
        sleep: function() {
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        }
    };
    return pet;
};