const VALOSC = () => {
    return (
      <section id="learn" className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-item-center justify-content-between">
            <div>
              <h1>Become a{' '}
                <span className="text-danger">
                  Valorant Pro!
                </span>
              </h1>
              <p className="lead my-4">Embark on your journey to outsmart and outgun your opponents in Valorant by joining the Fragpulse community today! As your dedicated portal to all things Valorant, our platform ensures you stay ahead of the curve with timely updates on agent abilities, weapon metas, and the latest esports events. Become a Fragpulse member to gain exclusive access to expert analyses, insightful guides, and community discussions, offering a comprehensive approach to mastering the dynamic world of Valorant. Fragpulse isn't just a platform; it's a vibrant community where Valorant enthusiasts converge to share insights, discuss tactics, and elevate their gameplay. Don't miss out on the opportunity to enhance your Valorant experience. Sign up now and join a thriving community dedicated to achieving victory on the tactical battlegrounds!</p>
              <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#clickformore">Find out how!</button>
            </div>
            <img src={require("../images/ValShowCase.jpg")} className="img-fluid w-50 d-none d-sm-block" alt="Valorant Showcase"></img>
          </div>
        </div>
      </section>
    );
  }
  
  export default VALOSC;
  