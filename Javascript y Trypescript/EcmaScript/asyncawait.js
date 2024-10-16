
const http = require('http');
  
  // Llamamos a la función

  async function pokepiData(){

    try{
        //get response
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const datosPokemon = await response.json();
        console.log(datosPokemon)
    } catch (error){
        console.log(`hubo un error: ${error}`)
    }
  }
 //pokepiData()

 const obtenerArrow = async ()=>{
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(`error ocurrido: ${error}`)
    }
 }
   
 obtenerArrow()


 //http methods