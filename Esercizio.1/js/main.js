// TODO:  ESERCIZIO N°1

/** Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

//! RACCOLTA DATI

/**Lista delle email */
const emailList = [
  "virgi74@gmail.com",
  "alex34@gmail.com",
  "francesco76@gmail.com",
  "liana25@gmail.com",
];

/* Chiedo l'email all'utente */
const userEmail = prompt("Inserisci la tua email");

/* Verifica la validità dell'email nella lista */
let isUserValid = false;

//!ELABORAZIONE

/** Se è presente nella lista dell'email allora si accede */

for (let i = 0; i < emailList.length; i++) {
  if (userEmail === emailList[i]) {
    isUserValid = true;
  }
}

//! OUTPUT

/** Stampa il messaggio dell'esito dell'accesso */

console.log(
  isUserValid
    ? "La tua email è presente nella lista"
    : "La tua email non è presente nella lista"
);
