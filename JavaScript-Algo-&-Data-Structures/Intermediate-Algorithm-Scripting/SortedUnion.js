function sortedUnion(arr){
    let finalArr = [];
    let values = Object.values(arguments);
    for(let i = 0; i < values.length; i++){
        for(let j = 0; j < values[i].length; j++){
            if(finalArr.indexOf(values[i][j]) === -1){
                finalArr.push(values[i][j]);
            }
        }
    }
    return finalArr;
}

let result = sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]);  
//uniteUnique([1, 2, 3], [5, 2, 1])
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
//uniteUnique([1, 3, 2], [5, 4], [5, 6])
//uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])
console.log(result);