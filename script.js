/*
chiedere i km.
chiedere l'età.

se età è minore di 18: sconto 20%
se età è maggiore di 65: sconto 40%

*/

const age = parseInt(prompt("Qual è la tua età?"));
const km = parseInt(prompt("Quanti chilomentri devi percorrere?"));
const costo_biglietto = (0.21 * km);
let costo_finale = 0;

if(age < 18){
    costo_finale = costo_biglietto - (costo_biglietto * (20/100));
    document.getElementById("prezzo_finale").innerHTML = costo_finale;
} else if(age > 65){
    costo_finale = costo_biglietto - (costo_biglietto * (40/100));
    document.getElementById("prezzo_finale").innerHTML = costo_finale;
} else{
    document.getElementById("prezzo_finale").innerHTML = costo_biglietto;
}