// import './App.css';
import Firstbox from "./Components/Firstbox";
import { BrowserRouter } from "react-router-dom";
import Secondbox from "./Components/Secondbox";
import Thirdbox from "./Components/Thirdbox";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Firstbox />
        <Secondbox/>
        <Thirdbox/>
      </BrowserRouter>
    </div>
  );
}

export default App;
