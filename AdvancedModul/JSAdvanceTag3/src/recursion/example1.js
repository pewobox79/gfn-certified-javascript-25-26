// Beispiel zu Recursion

// Count soll von 3 rückwärts zählen => 3 2 1 

function countDown(n){

    for(let i = n; i > 0; i--){
        console.log(i)
    }
    console.log("happy new year")

}

//countDown(3)


// als Rekursion möglich

function countDownRecursion(n){
    //guard clause
    if(n <= 0){
        console.log("happy new year")
        return
    }

    console.log(n)
    countDownRecursion(n - 1)


}

countDownRecursion(3)


/**
 * countDownRecursion(3) erster loop
 * countDownRecursion(2) zweiter loop
 * countDownRecursion(1) dritter loop
 * countDownRecursion(0) 
 * return
 * 
 */