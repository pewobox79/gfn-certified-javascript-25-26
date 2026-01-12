// Bezeichnungen => sollen eindeutig sein!

const x = 10 // size of Group
const groupSize = 10


// No GO
// sonderzeichen wie ! oder <> oder auch zahlen am Anfang der bezeichnung!
// z.B. [const !group = 10]

// Keine eigenen Abkürzungen verwenden!!

const ptrGroupSize = 10 // Ptr würde für PETER stehen... keiner kann damit arbeiten

const artp = 23 // artp steht für artikelpreis
const itemPrice = 23 // itemPrice steht für artikelpreis
const articlePrice = 23


// Konfiguration constanten naming sind in SNAKE_CASE
const ACCESS_TOKEN = 232344234
const DB_URL = 'https://db.com'


//CAMELCASE für alle Variablen und Konstanten
const camelCase = 'camelCase schreibweise'
const myVariableName = 'Peter Wolf'
const my_Variable_Name = 'lköadjfkj' // bad practice schreibweise

//lesbarkeit verbessern durch camelCase
const Endoffile = "End of File" // => schlecht lesbar
const endOfFile = "End of File" // => besser lesbar

// case sensitive
const myNewValue = 1234

// Constant myNewValue hat einen speziellen Speicherort mit einer eindeutigen ID und Namenserkennung. 
// Diese ist somit fix und nur genaue schreibweise erkennbar.
console.log("my New Value", myNewValue)

// Nomen als bezeichner

const success = 'yes' // => wir verwenden NOMEN ausschließlich
const succeed = 'yes' // => wir verwenden KEINE Adjective

// singular anstatt plural

const productName = "BMW wheel"
const productNames = "BMW wheel, VW Wheel"

// gängige Abkürzungen
const ust = "Umsatzsteuer"
const bgb = "Bürgerliches Gesetzbuch"

// zu lange erklärung ist auch nicht gut
const myDailyCaloriesCosumingValue = 3000