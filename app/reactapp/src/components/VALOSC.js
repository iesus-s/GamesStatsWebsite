import React from 'react';

const VALOSC = () => {
  // Function to handle button click
  const handleButtonClick = () => {
    // Use window.prompt to simulate capturing the user's email
    const userEmail = window.prompt('Please enter your email:');

    // Check if the user entered an email
    if (userEmail) {
      // Simulate recording the email to local storage
      const storedEmails = JSON.parse(localStorage.getItem('userEmails')) || [];
      storedEmails.push(userEmail);
      localStorage.setItem('userEmails', JSON.stringify(storedEmails));

      console.log(`Email recorded: ${userEmail}`);
    }
  };

  return (
    <section id="learn" className="bg-dark text-light p-5 text-center text-sm-start">
      <div className="w-25 p-12"> </div>
      <div className="container">
        <div className="d-sm-flex align-item-center justify-content-between">
          <div>
            <h1>Become a{' '}
              <span className="text-danger">
                Valorant Pro!
              </span>
            </h1>
            <p className="lead my-4">Embark on your journey to outsmart and outgun your opponents in Valorant by joining the Fragpulse community today! As your dedicated portal to all things Valorant, our platform ensures you stay ahead of the curve with timely updates on agent abilities, weapon metas, and the latest esports events. Become a Fragpulse member to gain exclusive access to expert analyses, insightful guides, and community discussions, offering a comprehensive approach to mastering the dynamic world of Valorant. Fragpulse isn't just a platform; it's a vibrant community where Valorant enthusiasts converge to share insights, discuss tactics, and elevate their gameplay. Don't miss out on the opportunity to enhance your Valorant experience. Sign up now and join a thriving community dedicated to achieving victory on the tactical battlegrounds!</p>
            <button className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#clickformore" onClick={handleButtonClick}>
              Find out how!
            </button>
          </div>
          <iframe
            title="Valorant Showcase"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2LnFuREmbpk?autoplay=1&mute=1"
            allowFullScreen
            style={{ width: '400%', height: '400px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VALOSC;