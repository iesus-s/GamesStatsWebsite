import React from 'react';

const CSGOSC = () => {
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
                CS:GO Pro!
              </span>
            </h1>
            <p className="lead my-4">Embark on your journey to dominate the competitive scene in CS:GO by signing up on Fragpulse today! Our website serves as your portal to crucial information about Counter-Strike: Global Offensive, ensuring you stay at the forefront of the game's ever-evolving strategies and meta. As a member, you gain exclusive access to timely updates on weapon statistics, map strategies, and the latest tournament highlights. Stay in the loop with our in-depth guides, breaking news, and expert analyses that will enhance your skills and give you a strategic edge. Fragpulse is more than a platform; it's a community where CS:GO enthusiasts converge to share insights and discuss tactics. Don't miss out on the opportunity to elevate your CS:GO experience. Sign up now, and join a thriving community dedicated to mastering the art of precision and teamwork!</p>
            <button className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#clickformore" onClick={handleButtonClick}>
              Find out how!
            </button>
          </div>
          <iframe
            title="CS:GO Showcase"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k2vbZx2WPM8?autoplay=1&mute=1"
            allowFullScreen
            style={{ width: '400%', height: '400px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CSGOSC;
