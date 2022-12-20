function myReplace(string,before,after){
    if(before[0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1);
    }
    if(before[0] === before[0].toLowerCase()){
        after = after[0].toLowerCase() + after.slice(1);
    }

    
    let stringCollection = string.split(" ");
    for(let i = 0; i < stringCollection.length; i++){
        if(stringCollection[i] === before){
            stringCollection[i] = after;
        }
    }
    return stringCollection.join(" ");
}

let result = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(result);