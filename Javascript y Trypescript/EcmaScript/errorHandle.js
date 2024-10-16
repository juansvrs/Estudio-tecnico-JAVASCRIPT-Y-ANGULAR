const jsonString = '{ "name": "Juan", "age": 30 ';



try{
    const parsedData = JSON.parse(jsonString);
     console.log("El objeto parseado es:", parsedData);
} catch (error){
    console.log(`Error: ${error}`);

}