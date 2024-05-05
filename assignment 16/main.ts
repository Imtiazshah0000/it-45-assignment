//creating a guest list array
let guestlist=["hamza","aysha","sanam"];

// making varriable for those guest who cant come
let dontcome=guestlist[0];

// print the name of guest  who cant come 

console.log(dontcome,"naii ahhh sakta han");
//add or remove values from guest lisy array
guestlist.splice(0,1,"aysha");

//message print for bigger table 
console.log("goodnews ! we have found a big table for dinner")

//adding a new guest starting indx of array
guestlist.unshift("ali");

//adding a new guest at ending index pf array 
guestlist.push("zain");

//get a middle index of our guestlist array

let middleindex:number=Math.floor(guestlist.length / 2);
// adding a new guest to middle index of array 
guestlist.splice(middleindex,0,"osama");

// print message of updated list
console.log("updated list of our guest");

//sending ainvitation message to our guests one by one with their names 
guestlist.forEach(oneguest=>console.log(`salam ${oneguest},would you like to dinner with me?`));
