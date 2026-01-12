console.log(`''  || '' || 'Dog' : ${'' || '' || 'Dog'}`)
console.log(`'a' && true && 'auto': ${'a' && true && 'auto'}`)

let articleOverlist = []
if(!articleOverlist || articleOverlist.length === 0){
    console.log("no list => false")
}else{
    console.log("weiter so")
}

const imgUrl = 'https://www.meinbildurl.de'

if(!imgUrl){
    console.log("bild nciht existent")
}