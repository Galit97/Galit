import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux/counter/counterSlice";

const AddAmount = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number | "">("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value === "" ? "" : Number(event.target.value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    if (amount === "") return;
    dispatch(incrementByAmount(amount));
    setAmount(""); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddAmount;
