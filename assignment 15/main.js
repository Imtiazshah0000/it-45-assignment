var guestlist = ["kamran tessori", "aysha", "sanam"];
var dontcome = guestlist[0];
console.log(dontcome, "nai ahh sakta");
guestlist.splice(0, 0, "amir");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to dinner with me ?")); });
