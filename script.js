let km = prompt("Inserire quanti chilometri da percorrere");
let eta = prompt("Inserire età del passeggero");

let prezzo = km * 0.21

let scontoMinore = prezzo * 20 / 100
let scontoOver = prezzo * 40 / 100

/*
let minore = prezzo - scontoMinore
let over = prezzo - scontoOver
*/

console.log(
    `
    ------Dati del passeggero------
        Chilometri da percorrere: ${km}
        Età del passeggero: ${eta}
    ------Prezzo pieno------
        Prezzo pieno: ${prezzo}
    ------Prezzo Scontato (dove disponibile)------
    `
);


if(eta < 18){
    minore = prezzo - scontoMinore
    console.log ("Prezzo con sconto minorenne: " + minore + " €");
} else if(eta >= 65){
    over = prezzo - scontoOver
    console.log ("Prezzo con sconto over 65: " + over + " €");
} else{
    console.log ("Prezzo totale: " + prezzo + " €");
}



/*
Minorenne: ${minore}
Over 65: ${over}
*/