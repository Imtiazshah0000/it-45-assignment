// define a function to print each magician name from an array 
function showmagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define a array contaning magician name
var magiciannames = ["harry poter", "hamza", "usman"];
// calling the function to each magician name
showmagicians(magiciannames);
