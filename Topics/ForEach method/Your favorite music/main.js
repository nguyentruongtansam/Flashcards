const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
  // write your code
    music.forEach(function(value, index, array) {
        console.log(`My favorite music is ${value} choosing from ${array}`);
    });
}
