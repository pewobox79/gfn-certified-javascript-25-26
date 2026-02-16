import { useNavigate } from "react-router-dom"
import { BackButtonType } from "../../types/usertypes"
import { memo } from 'react';


const BackButton =({type = "back", link="", label="Back to Overview", btnColor = "primary"}:BackButtonType)=>{

    console.log("backbutton rendering")
    const isBack = type === "back"
    const navigateTarget = isBack ? -1 : link;

    const navigate = useNavigate()
    function handleGoBack(){
        navigate(navigateTarget as string)
    }

    return <button onClick={handleGoBack} className={`btn btn-${btnColor}`}>{label}</button>
}

export default memo(BackButton)