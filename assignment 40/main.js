// define the make album function 
function makealbum(artistname, albumtitle, tracks) {
    var album = {
        artist: artistname,
        title: albumtitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions with different values 
var album1 = makealbum("hamza ", "album title 1");
var album2 = makealbum("imtiaz ", "album title 2");
//caling a make album function with third parameter
var album3 = makealbum("usman", "album title 3", 10);
// print values of your objects created my function 
console.log(album1);
console.log(album2);
console.log(album3);
