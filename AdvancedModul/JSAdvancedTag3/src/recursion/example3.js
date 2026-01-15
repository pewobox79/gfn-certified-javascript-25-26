// beispiel 3 Familienstammbaum

const tree = {
    name: 'John',
    children: [
        {
            name: "Jim",
            children: []
        },
        {
            name: 'Tommy',
            children: [
                {
                    name: "Paul",
                    children: []
                },
                {
                    name: "Sarah",
                    children: [{
                        name: "sarahs kind 1",
                        children: []
                    },]
                }
            ]
        }
    ],

}

function printChildrenRecursive(t) {
    //guard clause
    if (t.children.length === 0) return

    t.children.forEach(child => {
        console.log(child.name) // => jim 
        printChildrenRecursive(child) // jim tree
    })


}

printChildrenRecursive(tree)

/**
 * printChildrenRecursive('tree von john)
 * printChildrenRecursive('tree von Jim)
 * return durch guard clause da keine kinder bei Jim
 * printChildrenRecursive('tree von Tommy')
 * printChildrenRecursive('tree von paul')
 * return da paul keine kinder hat
 * printChildrenRecursive(tree von sarah)
 * return
 * 
 */