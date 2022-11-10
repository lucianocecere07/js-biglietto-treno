let km = prompt("Inserire quanti chilometri da percorrere");
let eta = prompt("Inserire età del passeggero");

let prezzo = km * 0.21;
let prezzoDecimali = prezzo.toFixed(2);

let scontoMinore = prezzo * 20 / 100;
let scontoOver = prezzo * 40 / 100;

let decimali = 0;

if (eta < 18) {
    let minore = prezzo - scontoMinore;
    decimali = minore.toFixed(2);
} else if (eta >= 65) {
    over = prezzo - scontoOver;
    decimali = over.toFixed(2);
} else {
    decimali = prezzoDecimali;
}

console.log(
    `
    ------Dati del passeggero------
        Chilometri del percorso: ${km}
        Età del passeggero: ${eta}
    ------Prezzo del biglietto------
        Prezzo pieno: ${prezzoDecimali} €
    ------Totale (con sconto dove disponibile)------
        Totale (con sconto): ${decimali} €
    `
);