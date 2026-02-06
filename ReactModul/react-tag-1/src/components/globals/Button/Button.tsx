import styles from '../../../styles/Button.module.css'
import { useState } from 'react'

interface ButtonType {
    variant: 'alert' | 'info' | 'success'
    title?: string
    children?: React.ReactElement[] | React.ReactElement | React.ReactNode
    style?: React.CSSProperties
    action: {
        type: 'alarm' | 'addUser'
        data?: string | undefined 
    }
}
export default function Button({ variant, title = 'Submit', children, style, action}: ButtonType){

    //wir machen den Button STATEFULL
    const [state, setState] = useState(false);

    console.log("mein State ist", state)

    function btnStyle(variantValue: ButtonType['variant']){
        const styling ={
            alert: 'redBtnM',
            success: 'successBtnM',
            info: 'yellowBtnM'
        }
        return styles[styling[variantValue]]
    }

    function handleSubmit(data: string){
        console.log("data to submit", data)
    }
    
    const availableActions={
        alarm: ()=> alert("das ist ein alarm"),
        addUser: (data: string | undefined)=> console.log("user added", data),
        submit: handleSubmit
    }

    function changeBackground(){

        setState(!state)
    }

    return <button 
            onClick={(e)=>{
                e.preventDefault()
                changeBackground()
                availableActions[action.type](action.data && action.data)
        }}
            className={btnStyle(variant)} 
            style={{backgroundColor: state ? "black": "white"}}
        >
        {children ? children : title}
        </button>
}