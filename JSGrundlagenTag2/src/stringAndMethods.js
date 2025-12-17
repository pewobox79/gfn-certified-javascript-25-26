// Methoden auf STRING daten typen

console.log('Ich bin heute fröhlich'.length * 2)
console.log(' Ich bin heute fröhlich '.toUpperCase().trim()) // => methoden Verketten

//wie viele Zeichen haben euer vor und nachname gemeinsam
console.log(' Peter '.trim().length * 'Wolf'.length) // => kalkulation mit Rückgabewerten
console.log('Peter'.length * 'Wolf'.length) // => variante mit Multiplikation

// special replaceAll(' ', '' ) -> löscht alle Leerzeichen in einem string 
console.log('Santa Peter maria luziano '.replaceAll(' ', '').length * 'Wolf'.length)

//LITERALS => haben immer einen festen Wert
'String'
10
33.4
1998
'Das bin ich'
