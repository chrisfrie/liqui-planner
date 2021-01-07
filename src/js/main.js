"use strict";

const { lstat } = require("fs");

// Eingabedaten holen vom Nutzer
let titel_1 = prompt('Titel:');
console.log(titel_1);
let typ_1 = prompt('Typ (Einnahme oder Ausgabe):');
console.log(typ_1);
let betrag_1 = prompt('Betrag (in Cent):');
console.log(betrag_1);
let datum_1 = prompt('Datum (jjjj-mm-tt):');
console.log(datum_1);

//Gesamtbilanz
let einnahmen;
let ausgeben;
let bilanz;

