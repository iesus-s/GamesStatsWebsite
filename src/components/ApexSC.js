const ApexSC = () => {
  return (
    <section id="learn" className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-item-center justify-content-between">
          <div>
            <h1>Become a{' '}
              <span className="text-danger">
                Apex Predator!
              </span>
            </h1>
            <p className="lead my-4">Embark on your journey to become an Apex Predator by signing up on Fragpulse today! Our website is your gateway to a wealth of crucial information about Apex Legends, ensuring you stay at the forefront of the game's dynamic landscape. By becoming a member, you gain exclusive access to timely updates on weapon meta, character strategies, and the latest in-game events. Stay in the loop with our comprehensive guides, breaking news, and expert analyses that will sharpen your skills and give you a strategic edge. Fragpulse is more than a platform; it's a community where Apex enthusiasts converge to share insights and discuss tactics. Don't miss out on the opportunity to elevate your Apex Legends experience. Sign up now, and join a thriving community dedicated to mastering the art of the arena!</p>
            <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#clickformore">Find out how!</button>
          </div>
          <img src={require("../images/ApexShowCase.jpg")} className="img-fluid w-50 d-none d-sm-block" alt="Apex Legends Showcase"></img>
        </div>
      </div>
    </section>
  );
}

export default ApexSC;
