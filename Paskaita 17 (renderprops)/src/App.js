import "./App.css";
import DataFetcher from "./components/DataFetcher/DataFetcher";
import TodoVariant1 from "./components/TodoVariant1/TodoVariant1";
import TodoVariant2 from "./components/TodoVariant2/TodoVariant2";

function App() {
  return (
    <div>
      <DataFetcher render={(data) => <TodoVariant1 data={data} />} />

      <DataFetcher render={(data) => <TodoVariant2 data={data} />} />
    </div>
  );
}

export default App;
