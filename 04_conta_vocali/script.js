/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getNumbVocals(word){
    let numbVocals = 0;
    const vocals = ["a","e","i","o","u"];
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < vocals.length; j++){
            if (word[i].toLowerCase() === vocals[j]) {
                numbVocals ++;
            }
        }
    }
    return numbVocals;
}

/* arrow function
const getNumbVocals = word =>{
    let numbVocals = 0;
    const vocals = ["a","e","i","o","u"];
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < vocals.length; j++){
            if (word[i].toLowerCase() === vocals[j]) {
                numbVocals ++;
            }
        }
    }
    return numbVocals;
}  */

// Invoca la funzione qui e stampa il risultato in console
console.log(getNumbVocals(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)