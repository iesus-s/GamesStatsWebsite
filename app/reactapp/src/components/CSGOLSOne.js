import React, { useState } from 'react';

const CSGOLSOne = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalText((prev) => !prev);
  };

  return (
    <section id="guides" className="bg-dark text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md">
            <img src={require("../images/TerrorCS.webp")} className="img-fluid" alt=""/>
          </div>

          <div className="col-md">
            <p>
              <h2>Optimal Loadouts for Terrorist Side in CS:GO:</h2>
              When venturing into the volatile world of Counter-Strike: Global Offensive as a terrorist, the choice of weaponry can be the key to executing successful strategies. For the entry fragger, the AK-47 is a staple, providing lethal one-shot headshots and a rapid rate of fire. Paired with a Desert Eagle or Tec-9 for close encounters, this loadout ensures versatility in engagements. A designated AWPer might opt for the powerful AWP sniper rifle, delivering devastating long-range shots. Complementing the arsenal, Molotov cocktails and flashbangs become essential tools for breaching bombsites and disorienting opponents.
              {showAdditionalText && (
                <>
                  <br />
                  The terrorist side thrives on swift and coordinated strikes, making these loadouts vital for executing precise and impactful attacks.
                  <br />
                  <strong>Additional Tips for Terrorist Side:</strong>
                  <ul>
                    <li>Coordinate with your team to execute synchronized strategies for bombsite attacks.</li>
                    <li>Study common defender positions and adapt your approach to catch opponents off guard.</li>
                    <li>Effective use of utility, such as smoke grenades and Molotov cocktails, can create opportunities and disrupt enemy defenses.</li>
                    <li>Communicate information about enemy positions to your team to ensure coordinated and strategic movements.</li>
                    <li>Be mindful of the economy, and plan your purchases to maximize firepower while considering team financial resources.</li>
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

export default CSGOLSOne;
