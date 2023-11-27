const ApexLSThree = () => {
  const apexItemStoreLink = 'https://apexitemstore.com';

  const redirectToApexItemStore = () => {
    window.open(apexItemStoreLink, '_blank');
  };

  return (
    <section id="learn" className="bg-dark text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={require("../images/FlatlineSkin.jpg")} className="img-fluid" alt="" />
          </div>

          <div className="col-md">
            <h2>Shop Changes of the Week/Season</h2>
            <p>Revamp Your Arsenal: Give your weaponry a stylish makeover! This week's exclusive offer brings you stunning skins and decals for the Flatline and EVA-8. Elevate your firepower with these eye-catching designs, available at a limited-time discount. Don't miss the chance to make your mark on the battlefield in style!</p>
            <button
              className="btn btn-light mt-3"
              onClick={redirectToApexItemStore}
            >
              Visit the Shop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexLSThree;
