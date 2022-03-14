import logo from "./logo.svg";
import "./App.css";
import Food from "./components/Food";
import Breakfast from "./components/Breakfast";
import ToggleInputs from "./components/ToggleInputs";

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <Breakfast overwrite="vegan sausages">
                <Food food="toast" />
                <Food food="mushrooms" />
            </Breakfast>
            <ToggleInputs>
                <input
                    disabled={false}
                    type="text"
                    placeholder="tell me a joke!"
                />
                <select disabled={false} name="type" id="joke-type">
                    <option>funny</option>
                    <option>hilarious</option>
                </select>
            </ToggleInputs>
        </div>
    );
}

export default App;
