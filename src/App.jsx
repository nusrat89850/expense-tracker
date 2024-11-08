
import { useState } from 'react';
import './App.css';
import ExpenseList from './componenets/ExpenseList';

function App() {
  const categories = ["home", "family", "tour", "movies", "universities"];

  const [expenses, setExpenses] = useState([
    {id:1, category:"tour", description:"bandarban tour", amount: 6100},
    {id:2, category:"movies", description:"Star Cineplex", amount: 1000},
    {id:3, category:"home", description:"Groccery purchase", amount: 3100},
    {id:4, category:"tour", description:"Sajek tour", amount: 8100},
    {id:5, category:"home", description:"House rent", amount: 100},
  ]
);

const [selectedCategory, setSelectedCategory] = useState("");
const handleRemoveCost = (id) => {
  setExpenses(expenses.filter((item) => item.id  != id));
};

const filterExpense = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <>
    <div className='flex justify-end mb-6'>
      <select className="select select-primary w-full max-w-xs" onChange={(e) => setSelectedCategory(e.target.value) }>
      <option disabled selected>Filter by Category </option>
      <option value="">All</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
     </select>
    </div>
      <ExpenseList expenses = {filterExpense} onRemove = {handleRemoveCost} /> {" "}
    </>
  )
} 

export default App
