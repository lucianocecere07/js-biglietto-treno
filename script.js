let km = prompt("Inserire quanti chilometri da percorrere");
let eta = prompt("Inserire età del passeggero");

let prezzo = km * 0.21;
let prezzoDecimali = prezzo.toFixed(2);

let scontoMinore = prezzo * 20 / 100;
let scontoOver = prezzo * 40 / 100;


if (eta < 18) {
    minore = prezzo - scontoMinore;
    Decimali = minore.toFixed(2);
} else if (eta >= 65) {
    over = prezzo - scontoOver;
    Decimali = over.toFixed(2);
} else {
    Decimali = (prezzoDecimali - 0).toFixed(2);
}

console.log(
    `
    ------Dati del passeggero------
        Chilometri del percorso: ${km}
        Età del passeggero: ${eta}
    ------Prezzo del biglietto------
        Prezzo pieno: ${prezzoDecimali} €
    ------Totale (con sconto dove disponibile)------
        Totale (con sconto): ${Decimali} €
    `
);