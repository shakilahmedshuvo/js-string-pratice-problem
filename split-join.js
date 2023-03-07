const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomai bolte pari ni.kala kala sada sada';
// split....
const parts = lyrics.split(" ");
// sentences
const sentences = lyrics.split('.');
const character = lyrics.split("");
console.log(character);

// slice
const partial = lyrics.slice(5, 8);
console.log(partial);
// 
const partial2 = lyrics.substring(5, 8);
console.log(partial2);


const line = ["Tumi bondhu kala pakhi ami jeno ki",
    "Boshonto kale tomai bolte pari ni",
    "Kala kala sada sada",
    "Rong jomeche sada kala"];
const newSong = line.join(". ");
console.log(newSong);