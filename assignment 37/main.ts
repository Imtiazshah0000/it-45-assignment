// making a funtion 
function makeshirt (size :string="medium",printmessage:string="i love typescript "){
    console.log(`creating a ${size}shirt with me ${printmessage}print on shirt`)

}
// calling a function with by defficult values 
makeshirt();

// calling a function now with medium size and deficult message

makeshirt("medium")

// calling a function now with small size and also different print message

makeshirt("small","i love java script ")