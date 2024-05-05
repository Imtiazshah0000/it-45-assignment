//define a function with a rest parameterthe accept item argument representing
function makesandwich(...items:string[]){
    console.log("\n making a sandwhich with the following items:\n");

    items.forEach(singleitme=>console.log(singleitme));
    console.log("\n now enjoy sandwhich");

}

// call the function three time with three different number argument 

makesandwich("chicken","chess","mayo","egg");

makesandwich("breade","butter");
makesandwich("bread","butter","mayo","egg","chess","chicken","lettuce","tomato","onion","mayo","egg","chess","chicken","lettuce","tomato",);

