import React, { useState } from 'react';

const CSGOFAQ = () => {
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
                What kind of content can I expect on Fragpulse related to CS:GO?
              </button>
            </h2>
            {answersVisible['faqquestion-one'] && (
              <div className="accordion-body">
                Fragpulse is your one-stop resource for all things CS:GO. From weapon statistics and map strategies to the latest tournament highlights, our platform offers curated content that keeps you informed and enhances your gameplay in Counter-Strike: Global Offensive.
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
                Will I receive a lot of unnecessary notifications or emails if I sign up on Fragpulse for CS:GO information?
              </button>
            </h2>
            {answersVisible['faqquestion-two'] && (
              <div className="accordion-body">
               No need to worry! Fragpulse values your time and commitment. We understand the importance of focused updates. When you sign up, you'll receive only essential information directly related to CS:GO, ensuring you stay motivated and informed without unnecessary distractions.
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
                How can Fragpulse help me improve my skills in CS:GO?
              </button>
            </h2>
            {answersVisible['faqquestion-three'] && (
              <div className="accordion-body">
                Fragpulse is designed to be a comprehensive resource for CS:GO enthusiasts. Whether you're looking for weapon guides, map strategies, or staying up-to-date with the competitive scene, Fragpulse provides the information you need to sharpen your skills and elevate your gameplay in Counter-Strike: Global Offensive. Join our community, and let's conquer the competitive arena together!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default CSGOFAQ;
