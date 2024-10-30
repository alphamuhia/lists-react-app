import "./App.css";
import Days from "./components/Days";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Days />
      <Tasks />
      <h1>Collaboration example</h1>
      <nav>
        <h3>Alpha</h3>
        <link href="/">home</link>
        <link href="/">about</link>
      </nav>
    </div>
  );
}

export default App;
