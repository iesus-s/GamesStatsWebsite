import AccordionItem1 from "./AccordionItem1"
import AccordionItem2 from "./AccordionItem2"

const AccountAccordion = () => {
  return (
    <div className="user_settings container-fluid">
      <div className="accordion" id="accordionExample">
        <AccordionItem1 />
        <AccordionItem2 />


      </div>
    </div>

  )
}

export default AccountAccordion