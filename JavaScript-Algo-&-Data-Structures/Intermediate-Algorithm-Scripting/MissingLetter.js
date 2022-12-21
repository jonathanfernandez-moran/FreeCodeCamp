function fearNotLetter(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingIndex = alphabet.indexOf(string[0]);
    let sliceAlphabet = alphabet.slice(startingIndex);

    for(let i = 0; i < sliceAlphabet.length; i++){
        if(string[i] != sliceAlphabet[i]){
            return sliceAlphabet[i];
        }
    }
    return undefined;
}

let testArray = ["abce","abcdefghjklmno","stvwx","bcdf","abcdefghijklmnopqrstuvwxyz"];
for(let i = 0; i < testArray.length; i++){
    console.log(fearNotLetter(testArray[i]));
}
