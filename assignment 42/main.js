// define the function for magician name 
function showmagicianname(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makegreat(magicians) {
    return magicians.map(function (name) { return "the great".concat(name); });
}
// define an array of magician names
var magicianname = ["harry porter", "hamza", "imtiaz"];
var greatmagician = makegreat(magicianname);
console.log(greatmagician);
