import './Button.css'

interface ButtonType {
    variant: 'alert' | 'info' | 'success'
    title?: string
    children?: React.ReactElement[] | React.ReactElement | React.ReactNode
    style?: React.CSSProperties
}
export default function Button({ variant, title = 'Submit', children, style}: ButtonType){

function btnStyle(variantValue: ButtonType['variant']){
    const styling ={
        alert: 'redBtn',
        success: 'successBtn',
        info: 'yellowBtn'
    }
    return styling[variantValue]
}
    return <button 
            className={btnStyle(variant)} 
            style={style && style}
        >
        {children ? children : title}
        </button>
}