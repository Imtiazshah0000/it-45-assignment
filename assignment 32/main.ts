// array of curent user
let currentusers=["usama","Areeba","zain","imtiaz"]
// array of new user
let newusers=["hamza","zain","areeba","mahad"]

// looop through newusers to check for userbname avaibility

newusers.forEach(newoneuser=>{
    // making a condition for user already exist and save in our condition varible 
    let ourcondition=currentusers.some(currentoneusers=>currentoneusers.toLocaleLowerCase()===newoneuser.toLocaleLowerCase())
    // print different message using if else tatement 
    if (ourcondition){
        console.log(`sorry ${newoneuser}is already taken `)

    }else{
        console.log(`this user name ${newoneuser}is avaiable`)
    }

})