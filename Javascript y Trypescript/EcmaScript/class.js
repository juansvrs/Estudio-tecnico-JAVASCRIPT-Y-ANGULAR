// Define una clase Animal con propiedades de nombre y tipo, 
//y un método hacerSonido(). Luego, crea una subclase 
// Perro que extienda Animal y sobrescriba el método hacerSonido().

class Animal {
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
     hacerSonido() {
        console.log(`El ${this.tipo}, ${this.nombre} está haciendo un sonido : Wrgaahhh!!`)
    }
}

class Perro extends Animal{
    constructor(nombre){
       super(nombre,"Perrito")
    }
    hacerSonido() {
        console.log(`El ${this.tipo}, ${this.nombre} está haciendo un sonido : Wooffrrf wooorrff!!`)
    }
}
const animal = new Animal("Pochita","Demonio")
const animal2 = new Perro("Luna")

animal.hacerSonido();
animal2.hacerSonido();