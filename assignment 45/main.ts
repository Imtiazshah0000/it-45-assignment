// define a function to creat a car object with opitional option...

function creatcar(manufacturere,model,...Options){
    //initialize a car object with manufacture and model
    let car={
        manufacturere:manufacturere,
        model:model
    };

    // add additional optional to the car object 
    Options.forEach(Option=>{
        let [key,value]=Option.split(":");
        car [key.trim()]=value.trim();
    })
    
    return car;



    

}

// call the function to creat a car object 

let mycar =creatcar("toyota","carolla","color:black,","sunroof:true")

// print the variable to ensure all the information stored correctly in the car obect 

console.log(mycar);