let age = new Number(prompt("Qual è la tua età?"));
let km = new Number(prompt("Quanti chilomentri devi percorrere?"));
let costo_biglietto = 0;
let costo_finale = 0;

if(isNaN(age)){
    age = Number(prompt("Non hai inserito un valore valido. Per favore, scrivi la tua età"));
}
// Volevo fare il controllo dei caratteri, ma non avendo ancora fatto il ciclo while non posso farlo perfetto, nel dubbio lo lascio perché mi piace
if(isNaN(km)){
    km = Number(prompt("Non hai inserito un valore valido. Per favore, scrivi quanti chilometri devi percorrere"));
    costo_biglietto = (0.21 * km);
} else{
    costo_biglietto = (0.21 * km);
}
// Volevo fare il controllo dei caratteri, ma non avendo ancora fatto il ciclo while non posso farlo perfetto, nel dubbio lo lascio perché mi piace

if(age < 18){
    costo_finale = costo_biglietto - (costo_biglietto * (20/100));
    document.getElementById("prezzo_finale").innerHTML = costo_finale.toFixed(2);
} else if(age > 65){
    costo_finale = costo_biglietto - (costo_biglietto * (40/100));
    document.getElementById("prezzo_finale").innerHTML = costo_finale.toFixed(2);
} else{
    document.getElementById("prezzo_finale").innerHTML = costo_biglietto.toFixed(2);
}