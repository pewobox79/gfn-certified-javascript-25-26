const root = document.getElementById('root')

{
    //homepage
    const myHomepageData = { name: "homepage" }
    const myH1 = `<h1>Homepage</h1>`
    setTimeout(() => {
        root.innerHTML = myH1
    }, 4000)
}


const myH1 = '<h1>aboutme</h1>'
root.innerHTML = myH1
