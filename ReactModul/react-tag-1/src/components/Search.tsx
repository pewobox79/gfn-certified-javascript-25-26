import Button from "./globals/Button/Button";
import Button2 from "./globals/Button2";

export default function Search(){

    console.log("search renders")
    function handleBtn2(e:any){
        e.preventDefault()
        console.log("hallo btn 2")
    }
    return <form>
        <input 
        type="text" 
        placeholder="Was suchst du?" 
        />
        <Button 
        variant="alert" 
        action={{ type: "addUser", data: "klaus" }}/>
        
        <Button2 
            title="button2" 
            action={handleBtn2} />
    </form>
}