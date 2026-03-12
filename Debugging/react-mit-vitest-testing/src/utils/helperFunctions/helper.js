export const isEvenNumber = (num) => {
    if(!num || isNaN(num)) return "no number"
    return num % 2 === 0
}

