import "./App.css";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <>
      {" "}
      <p className="bg-yellow-300">Hello</p>
      <div className="flex flex-col items-center bg-black text-white p-4">
        <Counter />
      </div>
    </>
  );
}

export default App;
