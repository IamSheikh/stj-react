import { h } from "snabbdom";

const createElement = (type, props = {}, ...children) => {
    if (type.prototype && type.prototype.isStjReactClassComponent) {
        const componentInstance = new type(props);

        return componentInstance.render();
    }
    if (typeof type == "function") {
        return type(props);
    }
    return h(type, { props }, children);
};

class Component {
    constructor() {}
    setState(partialState) {
        this.state = {
            ...state,
            ...partialState,
        };
        StjReact.__updater(this);
    }
    render() {}
}

Component.prototype.isStjReactClassComponent = true;

const StjReact = {
    createElement,
    Component,
};

export default StjReact;
