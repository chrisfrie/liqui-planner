"use strict";

// Eingabedaten holen vom Nutzer
let titel_1 = prompt('Titel:');
console.log(`Titel: ${titel_1}`);
let typ_1 = prompt('Typ (Einnahme oder Ausgabe):');
console.log(`Typ: ${typ_1}`);
let betrag_1 = parseInt(prompt('Betrag (in Cent):'));
console.log(`Betrag: ${betrag_1} Cent`);
let datum_1 = prompt('Datum (jjjj-mm-tt):');
console.log(`Datum: ${datum_1}`);

let titel_2 = prompt('Titel:');
console.log(`Titel: ${titel_2}`);
let typ_2 = prompt('Typ (Einnahme oder Ausgabe):');
console.log(`Typ: ${typ_2}`);
let betrag_2 = parseInt(prompt('Betrag (in Cent):'));
console.log(`Betrag: ${betrag_2} Cent`);
let datum_2 = prompt('Datum (jjjj-mm-tt):');
console.log(`Datum: ${datum_2}`);

// Gesamtbilanz
let einnahmen;
let ausgeben;
let bilanz = betrag_1 + betrag_2;
console.log(`Bilanz: ${bilanz} ct`);