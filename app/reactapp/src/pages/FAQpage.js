import React, { useState } from 'react';

const FAQpage = () => {
  const [answersVisible, setAnswersVisible] = useState({
    'faqquestion-one': false,
    'faqquestion-two': false,
    'faqquestion-three': false,
  });

  const showAnswer = (questionId) => {
    setAnswersVisible((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  return (
    <section id="questions" className="className p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>

        <div className="accordion accordion-flush" id="faqquestions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-one')}
                disabled={answersVisible['faqquestion-one']}
              >
                What kind of content can I expect on Fragpulse related to Apex Legends?
              </button>
            </h2>
            {answersVisible['faqquestion-one'] && (
              <div className="accordion-body">
                Fragpulse is your go-to source for curated content on Apex Legends. From weapon meta analyses and character strategies to the latest in-game events, our platform provides timely updates, expert insights, and a thriving community discussion to enhance your Apex Legends experience.
              </div>
            )}
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-two')}
                disabled={answersVisible['faqquestion-two']}
              >
                Will I receive a lot of unnecessary notifications or emails if I sign up on Fragpulse?
              </button>
            </h2>
            {answersVisible['faqquestion-two'] && (
              <div className="accordion-body">
                No worries! Fragpulse values your time and commitment. We prioritize delivering only essential and important information directly related to Apex Legends. Expect focused updates on strategies, events, and key insights, keeping you motivated on your journey to become an Apex Predator.
              </div>
            )}
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-three')}
                disabled={answersVisible['faqquestion-three']}
              >
                How can Fragpulse help me improve my skills in Apex Legends?
              </button>
            </h2>
            {answersVisible['faqquestion-three'] && (
              <div className="accordion-body">
                Fragpulse is designed to be a comprehensive resource for Apex enthusiasts. Whether you're looking for weapon guides, character tips, or staying up-to-date with the game's meta, Fragpulse provides the information you need to sharpen your skills and elevate your gameplay in Apex Legends. Join our community, and let's conquer the arena together!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQpage;
