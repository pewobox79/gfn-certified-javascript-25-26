import { accordionData } from '../../store/accordionData';
import AccordionItem from "./AccordionItem"

export default function Accordion() {

    const ItemList = accordionData.map((item, index)=>{
        return <AccordionItem key={item.label.replaceAll(" ", "")} {...item} isOpen={index === 0}/>
    })

    return <div className="accordion" id="accordionExample">
        {ItemList}
    </div>
}