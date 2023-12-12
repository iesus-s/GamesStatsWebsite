const VALOPW = () => {
  const valorantWebsiteLink = 'https://playvalorant.com/en-us/';

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
                <h3 className="card-title mb-3">SniperShadow92</h3>
                <p className="card-text">
                  "SniperShadow92 showcased unparalleled accuracy with the Operator, holding angles on Bind to secure a stunning 3K, denying the attackers any chance of entry. Sealing the win."
                </p>
                <a href={valorantWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">RapidRaze</h3>
                <p className="card-text">
                  "RapidRaze's swift entry frags with the Vandal were the highlight of the match on Haven, dismantling the opposing team's defenses and opening up crucial opportunities for the attackers."
                </p>
                <a href={valorantWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">HealingHaven</h3>
                <p className="card-text">
                  "HealingHaven's Sage played a pivotal role in the defensive victory on Split, strategically using healing orbs and resurrection to turn the tide in favor of the defenders. Picking up his team."
                </p>
                <a href={valorantWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
  
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">FlashMaster</h3>
                <p className="card-text">
                  "FlashMaster, playing as Phoenix, executed a perfectly timed ultimate ability, blinding the entire enemy team on Ascent and allowing his squad to secure a flawless round with coordinated pushes."
                </p>
                <a href={valorantWebsiteLink} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  );
}

export default VALOPW;