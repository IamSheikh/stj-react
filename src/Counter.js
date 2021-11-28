import StjReact from "./stj-react";

export default class Counter extends StjReact.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    render() {
        return <p>Your Count is: {this.state.count}</p>;
    }
}
