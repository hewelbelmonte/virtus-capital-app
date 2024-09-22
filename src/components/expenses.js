const Expenses = ({ expenses }) => {
    if (!Array.isArray(expenses)) {
      return <div>No expenses available.</div>;
    }
  
    return (
      <div>
        {expenses.map(expense => (
          <div key={expense.id}>{expense.description}</div>
        ))}
      </div>
    );
  };
  
export default Expenses;  