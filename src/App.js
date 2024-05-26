import { ToDoContextProvider } from "./components/ToDo/Context/useToDo";
import { ToDo } from "./components/ToDo/ToDo";

function App() {
  return (
    <ToDoContextProvider>
      <ToDo/>
    </ToDoContextProvider>
  );
}

export default App;
