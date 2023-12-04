const VALOLSThree = () => {
  const pcGamesNLink = 'https://www.pcgamesn.com/valorant/night-market#:~:text=We%20expect%20the%20Episode%207,11%20and%20October%2030%2C%202023.';

  const redirectToPCGamesN = () => {
    window.open(pcGamesNLink, '_blank');
  };

  return (
    <section id="learn" className="bg-dark text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={require("../images/ValL3.jpg")} className="img-fluid" alt="" />
          </div>

          <div className="col-md">
            <h2>Shop Changes of the Week/Season</h2>
            <p>Dive into the ultimate Valorant shopping experience on Fragpulse's virtual marketplace! Our shop offers a curated selection of Valorant skins, gun buddies, and agent cosmetics that allow you to personalize your arsenal and stand out on the battlefield. From sleek weapon skins like the Prime Collection to unique agent outfits and eye-catching gun buddies, the Fragpulse shop is your go-to destination for transforming your in-game appearance. Explore our rotating inventory, featuring exclusive items and limited-time offers, to elevate your Valorant experience. With a seamless shopping interface and secure transactions, Fragpulse ensures that acquiring your desired in-game items is as enjoyable as the battles you'll undertake in Valorant. Browse, shop, and gear up in style with Fragpulse!</p>
            <button
              className="btn btn-light mt-3"
              onClick={redirectToPCGamesN}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VALOLSThree;
