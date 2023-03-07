function reverseWords(str) {
    const words = str.split(" ");
    // console.log(words);
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    // console.log(result);
    const reversed = result.join(' ');
    return result;
}

const myString = "I am a good boy";
reverseWords(myString);

const myString2 = reverseWords(myString);
console.log("reversed output is:", myString2);
