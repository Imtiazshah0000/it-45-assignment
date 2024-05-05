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


console.log("unforunatly a new dinner table wont arrive on time ,so i can only invit two guests to dinner with me ");

// using while loop to remove guest from the array until only two names emain
while(guestlist.length>2) {
    let removedguest=guestlist.pop();
    console.log(`sorry, ${removedguest}i cant invite you to dinner `);
}

console.log("invitation to the last 2guests ");
guestlist.forEach(lasttwo=>console.log(`lucky ${lasttwo}, you are still invited to dinner`));

//removing last two guest from the list 
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist);