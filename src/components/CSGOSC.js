const CSGOSC = () => {
  return (
    <section id="learn" className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-item-center justify-content-between">
          <div>
            <h1>Become a{' '}
              <span className="text-danger">
                CS:GO Pro!
              </span>
            </h1>
            <p className="lead my-4">Embark on your journey to dominate the competitive scene in CS:GO by signing up on Fragpulse today! Our website serves as your portal to crucial information about Counter-Strike: Global Offensive, ensuring you stay at the forefront of the game's ever-evolving strategies and meta. As a member, you gain exclusive access to timely updates on weapon statistics, map strategies, and the latest tournament highlights. Stay in the loop with our in-depth guides, breaking news, and expert analyses that will enhance your skills and give you a strategic edge. Fragpulse is more than a platform; it's a community where CS:GO enthusiasts converge to share insights and discuss tactics. Don't miss out on the opportunity to elevate your CS:GO experience. Sign up now, and join a thriving community dedicated to mastering the art of precision and teamwork!</p>
            <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#clickformore">Find out how!</button>
          </div>
          <img src={require("../images/CSGOShowCase.png")} className="img-fluid w-50 d-none d-sm-block" alt="CS:GO Showcase"></img>
        </div>
      </div>
    </section>
  );
}

export default CSGOSC;
