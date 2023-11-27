import React, { useState } from 'react';

const VALOLSOne = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalText((prev) => !prev);
  };

  return (
    <section id="guides" className="bg-dark text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md">
            <img src={require("../images/ValL1.jpg")} className="img-fluid" alt=""/>
          </div>

          <div className="col-md">
            <h2>Optimal Loadouts for Attacking Side in Valorant:</h2>
            <p>
              Navigating the tactical landscape of Valorant requires a carefully curated loadout on the attacking side. For those embracing the role of entry fragger, the Vandal or Phantom stands as the weapon of choice, offering rapid fire and versatility for close to mid-range engagements. Pairing it with a sidearm like the Ghost ensures adaptability in different scenarios. Sharpshooters seeking long-range dominance often lean towards the Operator, a powerful sniper rifle with the potential for one-shot kills. Coordinating agents may find utility in abilities like Phoenix's flashbangs or Breach's seismic disruption to break through enemy defenses. The attacking side thrives on swift execution, and these loadouts provide the firepower and tools necessary for successful assaults.
              {showAdditionalText && (
                <>
                  <br />
                  <strong>Additional Tips for Attacking Side:</strong>
                  <ul>
                    <li>Entry fragger role: Take the initiative in engagements, create openings, and disrupt enemy positions.</li>
                    <li>Adaptability is key: Be ready to switch between primary and sidearm based on the situation.</li>
                    <li>Coordinate with team abilities: Use agent abilities in tandem with your loadout to maximize impact.</li>
                    <li>Map control: Prioritize gaining control of key areas to set up successful attacks.</li>
                    <li>Communication is crucial: Keep teammates informed about your plans and listen to their callouts.</li>
                  </ul>
                </>
              )}
            </p>
            <button className="btn btn-light mt-3" onClick={handleButtonClick}>
              <i className="bi bi-chevron-right"></i> {showAdditionalText ? 'Read Less' : 'Read More'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VALOLSOne;
