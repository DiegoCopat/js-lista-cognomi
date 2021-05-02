/* 1. chiedi all'utente il cognome
2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */

// 1. chiedi all'utente il cognome
var cognomi = ["Bianchi", "Neri", "Rossi", "Gialli", "Verdi", "Blu", "Arancioni", "Rosa"];

var cognomeUtente;

cognomeUtente = cognomi.push(prompt("scrivi qui il tuo cognome, con la prima lettera in maiuscolo"));
// console.log( cognomeUtente.length + 1);

cognomi.sort();
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++) {
    console.log (cognomi[i] + " in posizione " + (i + 1));
}


// let str = 'prashant';
// let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitalized);
// //'Prashant'