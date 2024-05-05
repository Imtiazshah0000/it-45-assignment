var usernames = ["ahad", "usman", "zeeshan", "imtiaz"];
usernames = [];
if (usernames.length === 0) {
    console.log("your arra in empt we need to find some user!");
}
else {
    // using foreach loop array 
    usernames.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("hellow ".concat(oneuser, ",would you like to see status report"));
        }
        else {
            console.log("hellow ".concat(oneuser, ",thhank you for loging again."));
        }
    });
}
