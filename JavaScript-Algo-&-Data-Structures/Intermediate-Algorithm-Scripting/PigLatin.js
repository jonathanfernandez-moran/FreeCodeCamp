/*
Pig Latin

Pig Latin is a way of altering English Words.
If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add [ay] to it.
If a word begins with a vowel, just add [way] at the end.

GOAL: Translate the provided string to Pig Latin. Input strings are guaranteed to be Englist words in all lowercase.
*/

function translatePigLatin(string){
    /* Array of the vowels */
    const vowels = "aieou".split("");
    /* Loop to iterate the letters in string */
    for(let i = 0; i < string.length; i++){
        //turning variable string into letter variable based on its index
        let individualLetter = string[i];
        // if (individualLetter occurs in array vowel dont return -1 && is at index 0)
        if(vowels.indexOf(individualLetter) != -1 && i === 0){
            return string + "way";
        }        
        // if (individualLetter occurs in array vowel dont return -1)
        if(vowels.indexOf(individualLetter) != -1){
            return string.slice(i,string.length) + string.slice(0,i) + "ay";
        }
    }
    //if no vowel are found add ay to the end
    return string + "ay";
}

const example = ["california","paragraphs","glove","algorithm","eight","schwartz","rhythm"];
    for(let i =0; i < example.length; i++){
        let result = translatePigLatin(example[i]);
        console.log(result);
    }
