/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function getFilteredInitial(array, initial){
    const filteredArr = [];
    for(let i = 0; i < array.length; i++){
        if (array[i][0].toLowerCase() === initial.toLowerCase()) {
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
}

/* arrow function 
const getFilteredInitial = (array, initial) =>{
    const filteredArr = [];
    for(let i = 0; i < array.length; i++){
        if (array[i][0].toLowerCase() === initial.toLowerCase()) {
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
} */

// Invoca la funzione qui e stampa il risultato in console
console.log(getFilteredInitial(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]