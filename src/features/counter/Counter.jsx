import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className="flex flex-col items-center">
      <p>{count}</p>
      <div className="flex gap-4">
        <button className="border-2 px-2 font-bold " onClick={() => dispatch(increment())}>+</button>
        <button className="border-2 px-2 font-bold " onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
