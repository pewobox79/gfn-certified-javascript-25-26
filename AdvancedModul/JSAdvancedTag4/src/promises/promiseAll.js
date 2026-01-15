const promise1 = Promise.resolve("hello world");
const promise2 = 10; // ist wie ein promise wenn eine konstante einen wert zugewiesen bekommen hat!!!!
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve("good bye")
        } else {
            reject("shoot, something is wrong")
        }
    }, 2000)
})

Promise.all([promise1, promise3, promise2])
    .then(values => {
        if (!values) return
        values.forEach(item => console.log(item))
    })
    .catch(error => console.log("catch", error))
    .finally(()=> console.log("finally"))