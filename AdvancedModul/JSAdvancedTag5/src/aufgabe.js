/***
 * Ihr seid eine Webagentur. Für eine Landingpage müssen mehrere Assets vorbereitet werden.
Diese Schritte können parallel laufen (gleichzeitig), aber Deployment darf erst starten, wenn alles fertig ist.

Arbeiten, die parallel laufen:
- Logo exportieren (Dauer: 1200ms)
- Texte prüfen (Dauer: 800ms)
- Bilder optimieren (Dauer: 1500ms)
 * 
Aufgabe: 

Schreibe 3 Funktionen, die jeweils ein Promise zurückgeben:
- exportLogo()
- reviewCopy()
- optimizeImages()

Um die Prozesse im Detail zu erkenne, soll jede Funktion zu Beginn sofort ein console.log() schreiben, z. B.: "Starting logo export..."


Nach erfolgreichem Abschluss, soll jede Funktion ihrer Dauer resolve([Message]) zurückgeben, z. B.:

- "Logo ready"
- "Copy ready"
- "Images ready"

Erst nachdem alle Teilschritte erledigt sind, kann die Seite deployed werden 
- deploySite()


BONUS: Wie kann das deployment mit Async - Await umgeschrieben werden?
 */