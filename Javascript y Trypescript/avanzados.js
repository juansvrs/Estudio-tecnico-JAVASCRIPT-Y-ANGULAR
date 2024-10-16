// ?? check si es nulo o cero   
let a = 0
console.log(a??"es cero")
// ... agrega valores


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combi = [...array1,...array2]


//?. optional chaining

// Si 'address' no existe, no arroja error
const userWithoutAddress = { name: "Carlos" };
console.log(userWithoutAddress?.address?.city); // Output: undefined

