import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
