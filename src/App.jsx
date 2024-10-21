import Test from "./components/Test";
import Die from "./components/Die";

function App() {
  return (
    <div>
      {/* <Test /> */}
      <Die color={"bg-die-green"} />
      <Die color={"bg-die-red"} />
      <Die color={"bg-die-yellow"} />
      <Die color={"bg-die-blue"} />
      <Die color={"bg-white"} />
      <Die color={"bg-white"} />
    </div>
  );
}

export default App;
