import Button from "./globals/Button/Button";

export default function Search(){
    return <form>
        <input 
        type="text" 
        placeholder="Was suchst du?" 
        />
        <Button variant="alert"/>
    </form>
}