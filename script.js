let km = prompt("Inserire quanti chilometri da percorrere");
let eta = prompt("Inserire età del passeggero");

let prezzo = km * 0.21

let scontoMinore = prezzo * 20 / 100
let scontoOver = prezzo * 40 / 100

let minore = prezzo - scontoMinore
let over = prezzo - scontoOver




/*
console.log(
    `
    -------Dati del passeggero------
        Chilometri da percorrere: ${km}
        Età del passeggero: ${eta}
    ------Totale--------
        Prezzo totale: ${prezzo}
    ------Prezzo Scontato (dove disponibile)--------
        Minorenne: ${minore}
        Over 65: ${over}
    `
);
*/
