import { useNavigate } from "react-router-dom"

const BackButton =()=>{

    const navigate = useNavigate()
    function handleGoBack(){
        navigate(-1)
    }

    return <button onClick={handleGoBack} className="btn btn-warning">Back to Overview</button>
}

export default BackButton