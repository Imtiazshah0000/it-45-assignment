// define a function to creat a car object with opitional option...
function creatcar(manufacturere, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacture and model
    var car = {
        manufacturere: manufacturere,
        model: model
    };
    // add additional optional to the car object 
    Options.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car.[key.trim()] = value.trim();
    });
    return car;
}
// call the function to creat a car object 
var mycar = creatcar("toyota", "carolla", "color:black,", "sunroof:true");
// print the variable to ensure all the information stored correctly in the car obect 
console.log(mycar);
