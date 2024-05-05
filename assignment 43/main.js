function showmagician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through . map () it will modify array
function makegreat(magician) {
    return magician.map(function (name) { return " the great ".concat(name); });
}
// define an array of magician name 
var magicianname = ["harry porter ", "imtiaz", "haniya"];
// making a copy of original array through . slice () function
var copymagicianname = magicianname.slice();
// modify the copy array of include "the great" with their name
var copygreatmagicians = makegreat(copymagicianname);
// show both array original copied 
// original
console.log("original array \n");
showmagician(magicianname);
// copied
showmagician(copygreatmagicians);
