import StjReact from "./stj-react";
import StjReactDOM from "./stj-react-dom";
import Counter from "./Counter";

const Hello = ({ name }) => {
    return <h1>Hello {name}!</h1>;
};

const App = () => {
    return (
        <div className="App">
            <h1>Hello React</h1>
            <Hello name="Sheikh" />
            <Counter />
        </div>
    );
};

StjReactDOM.render(<App />, document.getElementById("root"));
