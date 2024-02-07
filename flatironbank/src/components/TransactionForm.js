import React, { useState } from "react";

function TransactionForm({ onSubmit }) {
  const [formData, setFormdata] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...formData });
    setFormdata({ date: "", description: "", category: "", amount: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="date"
        onChange={handleInputChange}
        value={formData.date}
        placeholder="Enter Date"
      />
      <input
        type="text"
        name="description"
        onChange={handleInputChange}
        value={formData.description}
        placeholder="Enter description"
      />
      <input
        type="text"
        name="category"
        onChange={handleInputChange}
        value={formData.category}
        placeholder="Enter category"
      />
      <input
        type="text"
        name="amount"
        onChange={handleInputChange}
        value={formData.amount}
        placeholder="Enter amount"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TransactionForm;
