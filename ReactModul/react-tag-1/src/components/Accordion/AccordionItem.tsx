interface AccordionItemType {
    label: LabelType
    body: string
}
type LabelType = string | React.ReactNode
export default function AccordionItem({ label, body }: AccordionItemType) {

    return <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {label}
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {body}
            </div>
        </div>
    </div>
}