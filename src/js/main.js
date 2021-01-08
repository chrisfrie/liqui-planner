"use strict";

// Gesamtbilanz anlegen
let einnahmen = 0;
let ausgaben = 0;
let bilanz = 0;

// Eingabedaten holen vom Nutzer
let titel_1 = prompt('Titel:');
let typ_1 = prompt('Typ (Einnahme oder Ausgabe):');
let betrag_1 = parseInt(prompt('Betrag (in Cent):'));
let datum_1 = prompt('Datum (jjjj-mm-tt):');

console.log(`Titel: ${titel_1}
Typ: ${typ_1}
Betrag: ${betrag_1} Cent
Datum: ${datum_1}`
);

if (typ_1 === "Einnahme" || typ_1 === "einnahme") {
    einnahmen += betrag_1;
    bilanz += betrag_1;
} else if (typ_1 === "Ausgabe" || typ_1 === "ausgabe") {
    ausgaben += betrag_1;
    bilanz -= betrag_1;
} else {
    console.log(`Der Typ "${typ_1}" ist nicht bekannt.`);
}

let titel_2 = prompt('Titel:');
let typ_2 = prompt('Typ (Einnahme oder Ausgabe):');
let betrag_2 = parseInt(prompt('Betrag (in Cent):'));
let datum_2 = prompt('Datum (jjjj-mm-tt):');

console.log(`Titel: ${titel_2}
Typ: ${typ_2}
Betrag: ${betrag_2} ct
Datum: ${datum_2}`
);

if (typ_2 === "Einnahme" || typ_2 === "einnahme") {
    einnahmen += betrag_2;
    bilanz += betrag_2;
} else if (typ_2 === "Ausgabe" || typ_2 === "ausgabe") {
    ausgaben += betrag_2;
    bilanz -= betrag_2;
} else {
    console.log(`Der Typ "${typ_2}" ist nicht bekannt.`);
}

// Gesamtbilanz ausgeben
let positiv = bilanz >= 0;

console.log(`Einnahmen: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${positiv}`
);