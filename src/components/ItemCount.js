import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ItemCount = ({ valorInicial, stock }) => {

  const [isAdd, setAdd] = useState(valorInicial);

  const increment = () => {
    const newValue = isAdd + 1;
    if (newValue <= stock) {
      setAdd(newValue);
    }
  };

  const decrement = () => {
    const newValue = isAdd - 1;
    if (newValue >= valorInicial) {
      setAdd(newValue);
    }
  };

  return (
    <>
      <div className="counter_container">
        <p>{isAdd}</p>
        <button onClick={increment}>
          <FaPlus />
        </button>
        <button onClick={decrement}>
          <FaMinus />
        </button>
      </div>
    </>
  );
};
export default ItemCount;