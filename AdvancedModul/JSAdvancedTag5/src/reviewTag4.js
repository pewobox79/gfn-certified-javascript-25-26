/**
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

//code here

function exportLogo() {
    console.log("Starting logo export...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // export logo
            const err = false;
            if (!err) {
                resolve("Logo ready")
            } else {
                reject("logo export is failed")
            }
        }, 1200);
    })
}

function reviewCopy() {
    console.log("Starting  copy review ...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const err = false;
            if (!err) {
                resolve("copy ready...")
            } else {
                reject("review failed")
            }
        }, 800);
    })
}

function optimizeImages() {
    // zusatzaufgabe: bild dauert länger als 800ms zu laden => reject()
    console.log("Starting Image optimisation");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const loadingTime = 700;
            if (loadingTime < 800) {
                resolve("image ready")
            } else {
                reject("image is too big")
            }
        })
    }, 1500);

}

function deploySite(assets) {
    console.log("start deployment with following assets: ", assets)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
            if (!assets || assets.length === 0) {
                reject("Deployment failed")
            } else {
                resolve("Deployment ready")
            }
        })
    }, 1000);


}

function generateAssets() {
    return Promise.all([exportLogo(), reviewCopy(), optimizeImages()])
}
//PROMISE VARIANTE
generateAssets()
    .then((res) => deploySite(res))
    .then(deploymentResult => {

        if(deploymentResult === "tolle Seite"){
            console.log("if fall")
        }else{
            console.log("else fall")
        }
    })
    .catch(err=>console.log("deployment error", err))


// async handling?

async function deploySiteAsync() {
    try {
        const assets = await generateAssets();
        const deploymentResult = await deploySite(assets)

        if(deploymentResult === "tolle Seite"){
            console.log("if fall")
        }
        else {
            console.log("successfull try: ", deploymentResult)
        }
        
    } catch (error) {
        console.log("error (async): ", error);
    }
}

deploySiteAsync();