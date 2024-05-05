
// define the make album function 
function makealbum(artistname:string,albumtitle:string,tracks?:number){
    let album:{artist:string,title:string,tracks?:number} ={

        artist:artistname,
        title:albumtitle,
    };

    if(tracks!==undefined){

        album.tracks=tracks;
    }
    return album;

}

// calling three functions with different values 

 let album1=makealbum("hamza ","album title 1");

 let album2=makealbum("imtiaz ","album title 2");
 
//caling a make album function with third parameter

 let album3=makealbum("usman","album title 3",10);

 // print values of your objects created my function 
 console.log(album1);
 console.log(album2);
console.log(album3);
