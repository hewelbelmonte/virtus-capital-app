import React from 'react';

const Incomes = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No income data available.</div>;
  }

  return (
    <div>
      <h2>Incomes</h2>
      {data.map(income => (
        <div key={income.id}>
          {income.description}: {income.amount}
        </div>
      ))}
    </div>
  );
};

export default Incomes;