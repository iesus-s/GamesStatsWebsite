import React, { useState } from 'react';

const ApexLSOne = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalText((prev) => !prev);
  };

  return (
    <section id="guides" className="bg-dark text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md">
            <img src={require("../images/WraithPic.jpg")} className="img-fluid" alt=""/>
          </div>

          <div className="col-md">
            <h2>Best Character Of The Season</h2>
            <p>
              <h2>Wraith</h2>
              <strong>Stay Mobile:</strong> Constantly move and reposition during engagements. Wraith's agility and small hitbox make her a challenging target.
              <br />
              <strong>Team Communication:</strong> Coordinate portal usage with your squad for strategic flanks or rapid escapes.
              {showAdditionalText && (
                <>
                  <br />
                  <strong>Use "Into the Void" Wisely:</strong> Master the timing of Wraith's tactical ability to dodge enemy fire or initiate surprise attacks.
                  <br />
                  <strong>Additional Wraith Tips:</strong>
                  <ul>
                    <li>Experiment with different portal placements to create unexpected flanking opportunities.</li>
                    <li>Communicate with your team about potential threats, and use "Into the Void" defensively to provide cover during critical moments.</li>
                    <li>Coordinate ultimates with your team for powerful combinations, such as using Wraith's portal alongside a Bangalore airstrike.</li>
                    <li>Wraith's passive ability, "Voices from the Void," warns you when danger approaches. Pay attention to these cues for better situational awareness.</li>
                    <li>Practice using the portal aggressively for rapid repositioning during fights, catching opponents off guard.</li>
                  </ul>
                </>
              )}
            </p>
            <button className="btn btn-danger mt-3" onClick={handleButtonClick}>
              <i className="bi bi-chevron-right"></i> {showAdditionalText ? 'Read Less' : 'Read More'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ApexLSOne;