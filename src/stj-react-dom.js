import StjReact from "./stj-react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";

const reconcile = snabbdom.init([propsModule]);
let rootVNode;

const render = (element, root) => {
    if (rootVNode === null) {
        rootVNode = root;
    }
    rootVNode = reconcile(root, element);
};

StjReact.__updater = (componentInstance) => {
    const oldVNode = componentInstance.__vNode;
    // find the updated DOM node by calling the render method
    const newVNode = componentInstance.render();

    // update the __vNode property with updated __vNode
    componentInstance.__vNode = reconcile(oldVNode, newVNode);
};

const StjReactDOM = {
    render,
};

export default StjReactDOM;
