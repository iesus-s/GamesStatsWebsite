import React, { useState } from 'react';

const ApexLSTwo = () => {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleButtonClick = () => {
    setShowAdditionalText((prev) => !prev);
  };

  return (
    <section id="learn" className="bg-secondary text-light p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">

          <div className="col-md">
            <img src={require("../images/GunsForSale.avif")} className="img-fluid" alt=""/>
          </div>

          <div className="col-md">
            <h2>Build Of The Season</h2>
            <p>
              <h3>Flatline & Eva-8</h3>
              <strong>Flatline Assault Rifle:</strong> The Flatline's hard-hitting rounds are perfect for engaging enemies at medium to long range. Equip it with a 2x HCOG Bruiser for precision.
              <br />
              <strong>EVA-8 Auto Shotgun:</strong> For close-quarters encounters, the EVA-8 is a reliable choice. Enhance its effectiveness with a Shotgun Bolt for faster fire rate.
            </p>
            <button className="btn btn-danger mt-3" onClick={handleButtonClick}>
              <i className="bi bi-chevron-right"></i> {showAdditionalText ? 'Read Less' : 'Read More'}
            </button>
            {showAdditionalText && (
              <div className="mt-3">
                <strong>Additional Build Tips:</strong>
                <ul>
                  <li>Experiment with different attachments such as extended mags and stocks to optimize your weapon handling.</li>
                  <li>Consider pairing the Flatline with a mid-range optic for improved target acquisition.</li>
                  <li>Mastering the rhythm of the Flatline's recoil pattern will enhance your accuracy during sustained fire.</li>
                  <li>For the EVA-8, practice quick weapon swaps to maintain control in fast-paced close-quarters combat.</li>
                  <li>Adapt your playstyle based on the evolving meta and keep an eye on patch notes for any changes that may impact your build.</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ApexLSTwo;