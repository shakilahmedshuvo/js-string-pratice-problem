const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomai bolte pari ni.kala kala sada sada';


const searchString = 'PAKHI';
// const doesExist = lyrics.includes('pakhi');

// const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);


// -----------------------------------------------------------------------------


// index of...........
console.log(lyrics.indexOf("kala"));

let findTheString = "kaila";

// conditon or error massasge
if (lyrics.indexOf(findTheString) !== -1) {
    console.log('exists inside the string')
}
else {
    console.log('cannot find it');
}

// start with.......
console.log(lyrics.startsWith("Tumi"));

// ends with.....
console.log(lyrics.endsWith("sada"));

const fileName = "mybiodata.pdf";
const otherFile = 'mypic.png';
fileName.endsWith(".pdf");