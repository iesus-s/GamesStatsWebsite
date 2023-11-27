const ApexPW = () => {
  const apexLegendsWebsiteLink = 'https://www.ea.com/games/apex-legends';

  return (
    <section id="potw" className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">QuantumPulse87</h3>
                <p className="card-text">
                  "QuantumPulse87 showcased incredible precision with the Wingman, landing consecutive headshots to secure a solo victory in the Apex Games."
                </p>
                <a href={apexLegendsWebsiteLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">EmberBlitzkrieg</h3>
                <p className="card-text">
                  "EmberBlitzkrieg lived up to their name, unleashing a relentless assault on enemy squads with a well-coordinated tactical push, securing a fiery triumph."
                </p>
                <a href={apexLegendsWebsiteLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">NexusNomad</h3>
                <p className="card-text">
                  "NexusNomad displayed exceptional map awareness, seamlessly navigating through the chaos to deliver a game-changing respawn beacon revive and turn the tide for the squad."
                </p>
                <a href={apexLegendsWebsiteLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
  
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">SpectralSerpentine</h3>
                <p className="card-text">
                  "SpectralSerpentine utilized Wraith's Dimensional Rift with finesse, orchestrating a flawless escape for the squad and leaving opponents bewildered in the midst of battle."
                </p>
                <a href={apexLegendsWebsiteLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  );
}

export default ApexPW;
