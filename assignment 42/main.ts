// define the function for magician name 

function showmagicianname(magicians:string[]){
    magicians.forEach(name=>console.log(name));

}

function makegreat(magicians:string[]){
   return magicians.map(name=>`the great${name}`);


}

// define an array of magician names

let magicianname=["harry porter","hamza","imtiaz"];


let greatmagician =makegreat(magicianname);

console.log(greatmagician)

