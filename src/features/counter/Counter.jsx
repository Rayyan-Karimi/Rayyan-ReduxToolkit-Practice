import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counterzzz.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const amountValue = Number(amount) || 0;

  const handleResetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <p>{count}</p>
      <div className="flex gap-4">
        <button
          className="border-2 px-2 font-bold "
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="border-2 px-2 font-bold "
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={amount}
        placeholder="Change by value"
        className="text-black text-center"
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex gap-4">
        <button
          className="border-2 px-2 font-bold "
          onClick={() => dispatch(incrementByAmount(amountValue))}
        >
          +
        </button>
        <button
          className="border-2 px-2 font-bold "
          onClick={() => dispatch(decrementByAmount(amountValue))}
        >
          -
        </button>
        <button className="border-2 px-2 font-bold " onClick={handleResetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
