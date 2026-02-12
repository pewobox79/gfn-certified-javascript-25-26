import { useState } from "react"

import Heading from "../globals/Heading"

interface AccordionItemType {
    label: LabelType
    body: string | React.ReactNode
    isOpen?: boolean
    user?: string | undefined
}
type LabelType = string
export default function AccordionItem({ label, body, isOpen, user }: AccordionItemType) {
    
    console.log("accordion item label", label, user)
    const [bgColor, setBgColor] = useState(false);

    function handleBGChange() {
        setBgColor(!bgColor)
        console.log("inside handleBGChange", bgColor)

    }

    console.log("outside function", bgColor)
    const itemId = label.replaceAll(" ", "").toLowerCase();
    return <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${itemId}`} aria-expanded="true" aria-controls={itemId}>
                {label} {}
            </button>
        </h2>
        <div id={itemId} className={`accordion-collapse collapse ${isOpen && "show"}`} data-bs-parent="#accordionExample">
            <div className={`accordion-body bg-${bgColor ? 'warning-subtle' :'primary-subtle'}`}>
                {body} {user}
            
                <button onClick={handleBGChange}>Change BG</button>
                <Heading/>
            
            </div>
        </div>
    </div>
}