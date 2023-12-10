import React from 'react';

const calculateProgress = () => {
  const currentDate = new Date();
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const totalMillisecondsInMonth = lastDayOfMonth - currentDate;
  const remainingMilliseconds = lastDayOfMonth - currentDate;
  const progress = ((totalMillisecondsInMonth - remainingMilliseconds) / totalMillisecondsInMonth) * 100;

  return progress;
};


const CSGOSS = () => {
  const progress = calculateProgress();

  return (
    <section className="bg-danger text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Time Until New Competitive Season</h3>

          <div style={{ width: '100%', height: '20px', backgroundColor: '#343a40', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#28a745' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

  export default CSGOSS