import React, { useState } from 'react';

const VALOFAQ = () => {
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
                What kind of content can I expect on Fragpulse related to Valorant?

              </button>
            </h2>
            {answersVisible['faqquestion-one'] && (
              <div className="accordion-body">
                Fragpulse is your ultimate resource for all things Valorant. From in-depth analyses of agent abilities to weapon metas and the latest esports events, our platform provides curated content designed to keep you informed and enhance your Valorant gameplay.
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
                Will I receive excessive notifications or emails if I sign up on Fragpulse for Valorant information?
              </button>
            </h2>
            {answersVisible['faqquestion-two'] && (
              <div className="accordion-body">
               Absolutely not! At Fragpulse, we respect your time and commitment. When you sign up, expect only essential information directly related to Valorant, ensuring you stay focused and motivated without unnecessary distractions.
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
                How can Fragpulse help me improve my skills in Valorant?
              </button>
            </h2>
            {answersVisible['faqquestion-three'] && (
              <div className="accordion-body">
                Fragpulse is designed to be a comprehensive resource for Valorant enthusiasts. Whether you're looking for agent guides, weapon strategies, or staying up-to-date with esports events, Fragpulse provides the information you need to sharpen your skills and elevate your gameplay in Valorant. Join our community, and let's conquer the tactical arena together!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
    
    export default VALOFAQ
   