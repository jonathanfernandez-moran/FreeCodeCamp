function convertHtml(string){
    let charactersToCheckFor = ["&","<",">",'"',"'"];
    for (let index = 0; index < string.length; index++) {
        if(charactersToCheckFor.indexOf(string[index]) != -1){
            string = 
            string.slice(0,index) + 
            convertCharacter(string[index])   +
            string.slice(index + 1, string.length)
            ;
        }
    }
    return string;
}

function convertCharacter(letter){
    if(letter === "&"){
        return "&amp;";
    }else if(letter === ">"){
        return "&gt;";
    }else if(letter === "<"){
        return "&lt;";
    }else if(letter === "'"){
        return "&apos;";
    }else if(letter === '"'){
        return "&quot;";
      }
}
 
let result = convertHtml("Hamburgers < Pizza < Tacos");
console.log(result);