import styles from '../../../styles/Button.module.css'

interface ButtonType {
    variant: 'alert' | 'info' | 'success'
    title?: string
    children?: React.ReactElement[] | React.ReactElement | React.ReactNode
    style?: React.CSSProperties
    action: {
        type: 'alarm' | 'addUser'
        data?: string | undefined 
    }
}
export default function Button({ variant, title = 'Submit', children, style, action}: ButtonType){
function btnStyle(variantValue: ButtonType['variant']){
    const styling ={
        alert: 'redBtnM',
        success: 'successBtnM',
        info: 'yellowBtnM'
    }
    return styles[styling[variantValue]]
}

    const availableActions={
        alarm: ()=> alert("das ist ein alarm"),
        addUser: (data: string | undefined)=> console.log("user added", data)
    }


    return <button 
        onClick={(e)=>{
            e.preventDefault()
            availableActions[action.type](action.data && action.data)
        }}
        className={btnStyle(variant)} 
            style={style && style}
        >
        {children ? children : title}
        </button>
}