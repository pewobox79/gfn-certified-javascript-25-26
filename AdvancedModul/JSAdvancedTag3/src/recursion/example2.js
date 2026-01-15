//Beispiel 2 berechnung 
// eingabe 3 = 6 Ergebnis
// 3 + 2 + 1 = 6 

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i
    }
    return total
}

//console.log(sumRange(3))

function sumRangeRecursive(n, total = 0) {

    if (n <= 0) {
        return total
    }

    let newTotal = total + n
    return sumRangeRecursive(n - 1, newTotal)



}

console.log(sumRangeRecursive(5))

/**
 * sumRangeRecursive(3,0)
 * sumRangeRecursive(2,3)
 * sumRangeRecursive(1,5)
 * sumRangeRecursive(0,6)
 * return 6
 */