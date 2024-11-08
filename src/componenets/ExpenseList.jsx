export default function ExpenseList({expenses, onRemove}) {
  if(expenses.length === 0) {
    return ( 
    <>
      <h3>No data found!</h3>
    </>
    );
}
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra border-sky-500 border-y-2">
    {/* head */}
    <thead>
      <tr className="text-xl text-sky-500">
        <th>Id</th>
        <th>Description</th>
        <th>Category</th>
        <th>Cost</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
      expenses.map((expense) => (
        <tr key={expense.id}>
        <td>{expense.id}</td>
        <td>{expense.description}</td>
        <td>{expense.category}</td>
        <td>{expense.amount}</td>
        <td><button className="btn btn-primary" onClick={() => onRemove(expense.id)}>Remove</button></td>
      </tr>
      )
      )
}
    </tbody>
  </table>
</div>
    </div>
  );
}
