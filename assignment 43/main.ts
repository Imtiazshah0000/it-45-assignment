function showmagician(magician:string[]){
    magician.forEach(name=> console.log(name));

}

// function to make magicians great through . map () it will modify array

function makegreat(magician:string[]){
    return magician.map(name=>` the great ${name}`);


}

// define an array of magician name 
let magicianname =["harry porter ","imtiaz","haniya"];

// making a copy of original array through . slice () function

let  copymagicianname=magicianname.slice()

// modify the copy array of include "the great" with their name

 let copygreatmagicians =makegreat(copymagicianname);

 // show both array original copied 
// original
console.log("original array \n")
 showmagician(magicianname);

 // copied

 showmagician(copygreatmagicians);