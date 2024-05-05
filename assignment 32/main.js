// array of curent user
var currentusers = ["usama", "Areeba", "zain", "imtiaz"];
// array of new user
var newusers = ["hamza", "zain", "areeba", "mahad"];
// looop through newusers to check for userbname avaibility
newusers.forEach(function (newoneuser) {
    // making a condition for user already exist and save in our condition varible 
    var ourcondition = currentusers.some(function (currentoneusers) { return currentoneusers.toLocaleLowerCase() === newoneuser.toLocaleLowerCase(); });
    // print different message using if else tatement 
    if (ourcondition) {
        console.log("sorry ".concat(newoneuser, "is already taken "));
    }
    else {
        console.log("this user name ".concat(newoneuser, "is avaiable"));
    }
});
