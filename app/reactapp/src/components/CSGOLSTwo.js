import React, { useState } from 'react';

const CSGOLSTwo = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalText((prev) => !prev);
  };

  return (
    <section id="learn" className="bg-secondary text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md">
            <img src={require("../images/CounterCS.png")} className="img-fluid" alt=""/>
          </div>

          <div className="col-md">
            <h2>Build Of The Season</h2>
            <p>
              <h3>Optimal Loadouts for Counter-Terrorist Side in CS:GO:</h3>
              On the flip side, as Counter-Terrorists, a strategic and defensive approach demands a different set of arms. The M4A4 or M4A1-S are favored choices for their accuracy and controlled recoil, providing the necessary firepower for holding sites. The AWP, while slower than its counterpart, is a game-changer in the hands of a skilled sniper, denying terrorists entry from a distance. Counter-Terrorists should equip themselves with utility, including HE grenades, smoke grenades, and flashbangs. These tools are crucial for delaying enemy advances, controlling chokepoints, and maintaining a strong defensive posture.
              {showAdditionalText && (
                <>
                  <br />
                  A well-balanced team that coordinates loadouts can effectively thwart terrorist offensives, securing victory for the Counter-Terrorist side in the ever-evolving rounds of CS:GO.
                  <br />
                  <strong>Additional Tips for Counter-Terrorist Side:</strong>
                  <ul>
                    <li>Communication is key: Maintain constant communication with your teammates to relay information about enemy movements.</li>
                    <li>Coordinate rotations: Anticipate enemy strategies and adjust player positions accordingly to respond effectively to threats.</li>
                    <li>Use utility wisely: Deploy grenades strategically to disrupt enemy attacks and gather information.</li>
                    <li>Hold key positions: Secure important map control points to limit terrorist options and control the flow of the round.</li>
                    <li>Adapt to opponents: Analyze the enemy team's playstyle and adjust your defensive strategies accordingly.</li>
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

export default CSGOLSTwo;