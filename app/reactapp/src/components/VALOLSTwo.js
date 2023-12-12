import React, { useState } from 'react';

const VALOLSTwo = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalText((prev) => !prev);
  };

  return (
    <section id="learn" className="bg-secondary text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md">
            <img src={require("../images/ValL2.jpg")} className="img-fluid" alt=""/>
          </div>

          <div className="col-md">
            <h2>Optimal Loadouts for Defending Side in Valorant:</h2>
            <p>
              On the defending side, agents in Valorant prioritize loadouts tailored for strategic control and counter-play. The Guardian or Sheriff can be effective choices for defenders aiming to hold long angles with precise shots. The Bucky, a shotgun, becomes a potent weapon in close-quarters engagements, especially for agents like Sage or Cypher defending tight chokepoints. A well-coordinated defensive team may opt for the Operator to deny entry from a distance. Abilities play a crucial role in fortifying defensive positions, with agents like Killjoy deploying turrets and Cypher using surveillance tools to gain valuable intel. A strategic combination of weapons and abilities empowers the defending side to thwart enemy advances and secure victories in Valorant's intense tactical battles.
              {showAdditionalText && (
                <>
                  <br />
                  <strong>Additional Tips for Defending Side:</strong>
                  <ul>
                    <li>Long-range control: Use Guardian or Sheriff for accurate shots at a distance.</li>
                    <li>Close-quarters defense: Bucky shotgun excels in tight spaces, providing a strong deterrent.</li>
                    <li>Deny entry with Operator: A well-placed Operator shot can disrupt enemy pushes.</li>
                    <li>Utilize defensive abilities: Coordinate agent abilities to create a formidable defensive setup.</li>
                    <li>Intel gathering: Cypher and Killjoy can provide valuable information to anticipate enemy movements.</li>
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

export default VALOLSTwo;