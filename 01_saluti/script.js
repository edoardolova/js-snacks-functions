/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function greeting(name){
    return `Ciao ${name}`;
}

// arrow function 
// const greetings = name => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
