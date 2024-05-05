let guestlist=["kamran tessori","aysha","sanam"];

let dontcome=guestlist[0];

console.log(dontcome,"nai ahh sakta");

guestlist.splice(0,0,"amir");

guestlist.forEach(guest=>console.log(`salam ${guest}, would u like to dinner with me ?`));
