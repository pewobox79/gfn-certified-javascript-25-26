//callback function
// kann CALLBACK, ACTION oder sonstig heißen...soll nur beschriftend sein!

function task2(output, callback) {
    console.log("verarbeiteter output: ", output + " verarbeitet")
    setTimeout(()=>{
        callback()
    }, 2000)
}

function task3() {
    console.log("task3 output")
}
function task1(num, callback, callback2) {
    const output = `die task1 nummer ${num}`
    setTimeout(()=>{
        callback(output, callback2)
    }, 3000)

}

const returnTask1 = task1(10, task2, task3)