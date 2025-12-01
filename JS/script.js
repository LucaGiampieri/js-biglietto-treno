/*
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

Output partite da semplice log, e poi se volete stampate in pagina come sapete fare.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80,
100km, 70 anni => prezzo corretto: €12.60
*/


//SETTAGGIO PARTE INIZIALE

let finalPrice;
const priceForKM = 0.21;


//INPUT (variabili e dati di ingersso)
    //chiediamo all'use la sua età
    const userAge = parseInt(prompt('Inserisci i tuoi anni'));
    console.log(userAge);
    
    //chiediamo all'user i km che dovrà percorrere
    const userKM = parseInt(prompt('Inserisci i Km che dovrai percorrere'));
    console.log(userKM);

//ELABORAZIONE
    //calcoliamo il prezzo per km



//OUTPUT