const CSGOPW = () => {
  const csWebsiteLink = 'https://www.counter-strike.net';

  return (
    <section id="potw" className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          
          <div className="col-md">
            <div className="card bg-dark text-light ">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">SniperSpecter98</h3>
                <p className="card-text">
                  "SniperSpecter98 demonstrated unparalleled precision with the AWP, securing a jaw-dropping 4K with quick flick shots on Dust II. His keen eye and strategic positioning showcased a mastery of long-range engagements that left opponents in awe"
                </p>
                
                <a href={csWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">BlitzStriker</h3>
                <p className="card-text">
                  "BlitzStriker lived up to the name, executing lightning-fast entry frags with the AK-47 on Mirage. In a pivotal round, he single-handedly dismantled the opposition, showcasing exceptional aim and reflexes that turned the tide in favor of his team. An effortless win. "
                </p>
                <a href={csWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">TacticalWarden</h3>
                <p className="card-text">
                  "TacticalWarden's game-changing utility usage on Inferno stood out as he perfectly timed incendiary grenades and smoke screens to control chokepoints. His strategic play created opportunities for his team to secure crucial rounds and emerge victorious."
                </p>
                <a href={csWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
    
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">ClutchViper</h3>
                <p className="card-text">
                  "In a nail-biting overtime match on Nuke, ClutchViper lived up to his name with a spectacular 1v3 clutch. His calm composure, precise aim, and clever positioning allowed him to outmaneuver opponents and secure the round, ultimately leading his team to triumph in the clutch."
                </p>
                <a href={csWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}

export default CSGOPW;