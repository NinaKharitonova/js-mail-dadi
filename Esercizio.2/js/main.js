// TODO:  ESERCIZIO N°2
/**
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//! RACCOLTA DATI

//* Genera un numero random per il giocato
const playerRoll = Math.floor(Math.random() * 6 + 1);

//* Genera un numero random per il computer
const computerRoll = Math.floor(Math.random() * 6 + 1);

//* Stampa il numero random del giocare
console.log(`Giocatore ha tirato: ${playerRoll}`);

//* Stampa il numero random del computer
console.log(`Il computer ha tirato: ${computerRoll}`);

//! ELABORAZIONE
//* Se il giocatore ha il numero più alto allora vince
if (playerRoll > computerRoll) {
  //* Stampa la vincità del giocatore
  console.log("Il giocatore vince!");

  //* Altrimenti se il giocatore ha il numero più basso allora perde
} else if (playerRoll < computerRoll) {
  //* Stampa la vincità del computer
  console.log("Il computer vince!");

  //* Altrimenti stampa il pareggio dei giocatori
} else {
  console.log("Pareggio!");
}
