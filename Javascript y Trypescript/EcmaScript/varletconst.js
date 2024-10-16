let a = 30
const b = 40

a = 42; //let se puede re asignar
// b = 11 //const no se puede re asignar, te saldria un error

console.log(a)

//Además, let solo esta dentro del contexto de las funciones

if (true){
    const y = "hola"
    console.log(y)

}
const ac = 30;
ac = ac + 25;

console.log(ac)


//resumen
// let: mutables, re asignar
// const: constantes pero si es array mutables