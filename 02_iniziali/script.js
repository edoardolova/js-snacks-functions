/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(names){
    const initialsArr = [];
    for (let i = 0; i < names.length; i++){
        initialsArr.push(names[i][0]);
    }
    return initialsArr;
}

// arrow function 
// const getInitials = names =>{
//     const initialsArr = [];
//     for (let i = 0; i < names.length; i++){
//         initialsArr.push(names[i][0]);
//     }
//     return initialsArr;
// }
// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]