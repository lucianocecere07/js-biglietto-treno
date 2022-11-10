let Km = prompt("Inserire quanti chilometri da percorrere");
let Eta = prompt("Inserire età del passeggero");

let Prezzo = Km * 0.21;
let PrezzoDecimali = Prezzo.toFixed(2);

let ScontoMinore = Prezzo * 20 / 100;
let ScontoOver = Prezzo * 40 / 100;


if (Eta < 18) {
    let Minore = Prezzo - ScontoMinore;
    let Decimali = Minore.toFixed(2);
} else if (Eta >= 65) {
    let Over = Prezzo - ScontoOver;
    let Decimali = Over.toFixed(2);
} else {
    let Decimali = (PrezzoDecimali).toFixed(2);
}

console.log(
    `
    ------Dati del passeggero------
        Chilometri del percorso: ${Km}
        Età del passeggero: ${Eta}
    ------Prezzo del biglietto------
        Prezzo pieno: ${PrezzoDecimali} €
    ------Totale (con sconto dove disponibile)------
        Totale (con sconto): ${Decimali} €
    `
);