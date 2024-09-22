import React from 'react';

const Investments = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No investment data available.</div>;
  }

  return (
    <div>
      <h2>Investments</h2>
      {data.map(investment => (
        <div key={investment.id}>
          {investment.description}: {investment.amount}
        </div>
      ))}
    </div>
  );
};

export default Investments;