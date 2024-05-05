// making a funtion 
function makeshirt(size, printmessage) {
    if (size === void 0) { size = "medium"; }
    if (printmessage === void 0) { printmessage = "i love typescript "; }
    console.log("creating a ".concat(size, "shirt with me ").concat(printmessage, "print on shirt"));
}
// calling a function with by defficult values 
makeshirt();
// calling a function now with medium size and deficult message
makeshirt("medium");
// calling a function now with small size and also different print message
makeshirt("small", "i love java script ");
