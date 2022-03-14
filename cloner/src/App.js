import logo from "./logo.svg";
import "./App.css";
import Food from "./components/Food";
import Breakfast from "./components/Breakfast";
import ToggleInputs from "./components/ToggleInputs";
import Spy from "./components/Spy";
import { useState, useRef, useEffect } from "react";
import DeepRename from "./components/Deeprename";
function App() {
    const [input, setInput] = useState("start");
    const prevInputRef = useRef();

    useEffect(() => {
        prevInputRef.current = input;
    }, [input]);

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

            <Spy>
                <input
                    ref={prevInputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </Spy>

            <DeepRename message="gotcha!">
                <div>
                    <div>
                        <div>
                            <div>
                                <p>change me!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DeepRename>
        </div>
    );
}

export default App;
