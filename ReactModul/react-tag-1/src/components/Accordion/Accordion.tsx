
import { accordionData } from '../../store/accordionData';
import AccordionItem from "./AccordionItem"
import UserContext from '../../context/UserContext';
import { useContext, useMemo } from 'react';

export default function Accordion() {

    const { user } = useContext(UserContext);

    console.log("accordion wrapper renders")
    const ItemList = useMemo(()=> accordionData.map((item, index)=>{
        return <AccordionItem key={item.label.replaceAll(" ", "")} {...item} isOpen={index === 0}/>
    }),[])

    return <div className="accordion" id="accordionExample">
        <h1>Dieses Accordion gehört {user.firstname}</h1>
        {ItemList}
    </div>
}