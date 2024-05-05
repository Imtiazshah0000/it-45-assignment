//define a function with a rest parameterthe accept item argument representing
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwhich with the following items:\n");
    items.forEach(function (singleitme) { return console.log(singleitme); });
    console.log("\n now enjoy sandwhich");
}
// call the function three time with three different number argument 
makesandwich("chicken", "chess", "mayo", "egg");
makesandwich("breade", "butter");
makesandwich("bread", "butter", "mayo", "egg", "chess", "chicken", "lettuce", "tomato", "onion", "mayo", "egg", "chess", "chicken", "lettuce", "tomato");
