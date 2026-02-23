// RESTAPI Queries mit qs module

//item fragment
export const ButtonFragment = {
    button: {
        populate: ['icon']
    }
}

//component fragments
export const jumbotronFragment = {
    'components.jumbotron': {
        populate: {
            ...ButtonFragment
        },
    }
}

export const referenceElementFragment ={
    'elements.reference-element':{
        populate: {
            items: {
                populate: {
                    ...ButtonFragment
                }
            }
        }
    }
}