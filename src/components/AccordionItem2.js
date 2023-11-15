const AccordionItem2 = () => {
  return (
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Account Preferences
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              <div className="d-sm-flex flex-column justify-content-center">

              </div>
            </div>
        </div>
    </div>
  )
}

export default AccordionItem2