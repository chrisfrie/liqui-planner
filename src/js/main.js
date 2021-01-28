"use strict";

const haushaltsbuch = {

    gesamtbilanz: new Map(),
    
    eintraege: [],

    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt('Titel:'));
        neuer_eintrag.set("typ", prompt('Typ (Einnahme oder Ausgabe):'));
        neuer_eintrag.set("betrag", parseInt(prompt('Betrag (in Cent):'));
        neuer_eintrag.set("datum", prompt('Datum (jjjj-mm-tt):'));
        this.eintraege.push(neuer_eintrag);
    },

    eintraege_sortieren() {
        this.eintraege.sort(function (eintrag_a, eintrag_b) {
            if (eintrag_a.datum > eintrag_b.datum) {
                return -1;
            } else if (eintrag_a.datum < eintrag_b.datum) {
                return 1;
            } else {
                return 0;
            };
        });
    },

    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag){
            console.log(`Titel: ${eintrag.titel}\n`
                + `Typ: ${eintrag.typ}\n`
                + `Betrag: ${eintrag.betrag} ct\n`
                + `Datum: ${eintrag.datum}`
            );
        });
    },

    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = {
            einnahmen: 0,
            ausgaben: 0,
            bilanz:0
        };
        this.eintraege.forEach(function(eintrag){
            switch (eintrag.typ) {
                case "Einnahme":
                case "einnahme":
                    neue_gesamtbilanz.einnahmen += eintrag.betrag;
                    neue_gesamtbilanz.bilanz += eintrag.betrag;
                    break;
                case "Ausgabe":
                case "ausgabe":
                    neue_gesamtbilanz.ausgaben += eintrag.betrag;
                    neue_gesamtbilanz.bilanz -= eintrag.betrag;
                    break;
                default:
                    console.log(`Der Typ "${eintrag.typ}" ist nicht bekannt.`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },

    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} ct\n`
            + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
            + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
        );
    },

    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
        }
    }
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);
