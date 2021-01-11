"use strict";

// Gesamtbilanz anlegen
let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0;

// declarieren der Eingabedaten
let titel, typ, betrag, datum;

// Eingabedaten holen vom Nutzer als Funktion
const eintrag_erfassen = function() {
    titel = prompt('Titel:');
    typ = prompt('Typ (Einnahme oder Ausgabe):');
    betrag = parseInt(prompt('Betrag (in Cent):'));
    datum = prompt('Datum (jjjj-mm-tt):');
};

// eingegebene Daten in der Console ausgeben
const eintrag_ausgeben = function(titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} Cent
Datum: ${datum}`
    );
};

const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag) {
    if (typ === "Einnahme" || typ === "einnahme") {
        einnahmen += betrag;
        bilanz += betrag;
    } else if (typ === "Ausgabe" || typ === "ausgabe") {
        ausgaben += betrag;
        bilanz -= betrag;
    } else {
        console.log(`Der Typ "${typ}" ist nicht bekannt.`);
    }
};

const gesamtbilanz_ausgeben = function(einnahmen, ausgaben, bilanz) {
    console.log(`Einnahmen: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`
    );
};

const eintrag_hinzufuegen = function () {
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
};

eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();