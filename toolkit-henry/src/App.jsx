import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
// import { Counter } from "./features/counter/Counter";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
