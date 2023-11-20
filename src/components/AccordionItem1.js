import AccordionBioEntry from "./AccordionBioEntry"
import AccordionProfileName from "./AccordionProfileName"
import ForgotPasswordLink from "./ForgotPasswordLink"

const AccordionItem1 = () => {
  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Account Information
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div class="d-sm-flex flex-column justify-content-center">
                    <ForgotPasswordLink />
                    <AccordionProfileName />
                    <AccordionBioEntry />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccordionItem1