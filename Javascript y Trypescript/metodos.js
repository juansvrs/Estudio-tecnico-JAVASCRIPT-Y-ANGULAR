let texto = "esto es un texto cualquiera y AnaMaria LO SABE!"

console.log("String methods like toUpperCase and toLowerCase:");
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// to return a part of a string we use slice we give it the initial character and the last character
console.log("slice:");
console.log(texto.slice(0, 10));

// .replace
console.log("replace:");
console.log(texto.replace("AnaMaria", "Juanito Alimaña"));


//arreglos
const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0]= "Ford";
console.log(cars);


// `${name}  interpolacion