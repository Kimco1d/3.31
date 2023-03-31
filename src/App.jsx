import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };
  const onClicSubtract = () => {
    if (count <= 0) alert("count의 값이 0보다 작을 수 없습니다!");
    return;

    setCount(count - 1);
  };

  //    const onClicSubtract = () => {
  //    setCount((prev) => {
  //    return prev -1; })

  return (
    <div className="bg-red-100 min-h-screen flex flex-col  justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="mt-4 bg-red-300 w-12 h-12 rounded-full"
        onClick={onClicSubtract}
      >
        -
      </button>
    </div>
  );
}

export default App;
