var usernames = ["imtiaz", "Ali", "admin", "fahad"];
// using foreach loop array 
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hellow ".concat(oneuser, ",would you like to see status report"));
    }
    else {
        console.log("hellow ".concat(oneuser, ",thhank you for loging again."));
    }
});
