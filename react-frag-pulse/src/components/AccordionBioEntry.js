
const AccordionBioEntry = () => {
    return (
        <div>
            <label for="formGroupBioInput" className="form-label ">Bio Entry</label>
            <div className="input-group mb-3" id="formGroupBioInput">
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enter</button>
        </div>
    )
}

export default AccordionBioEntry