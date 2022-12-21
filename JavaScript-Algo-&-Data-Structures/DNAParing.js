function pairElement(initialStrand){
    return initialStrand.split("").map(initialStrand => {
        let pair = [ initialStrand,calculatePair(initialStrand)];
        return pair;
    });
}
function calculatePair(initialStrand){
    if(initialStrand === "A"){
        return "T";
    }else if(initialStrand === "T"){
        return "A";
    }else if(initialStrand === "C"){
        return "G";
    }else if(initialStrand === "G"){
        return "C";
    }
}

console.log(pairElement("GCG"));

const testArray = ["GCG","ATCGA","TTGAG","CTCTA"];
for(let i = 0; i < testArray.length; i++){
    console.log(pairElement(testArray[i]));
}
