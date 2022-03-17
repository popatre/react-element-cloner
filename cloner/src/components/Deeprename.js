import React, { cloneElement } from "react";

export default function Deeprename({ children, message }) {
    const childrenArray = React.Children.toArray(children);

    function iterator(childObj) {
        if (typeof childObj.props.children === "object") {
            return iterator(childObj.props.children);
        } else {
            return cloneElement(childObj, { children: message });
        }
    }

    const cloned = childrenArray.map((child) => {
        return iterator(child);
    });

    return <div>{cloned}</div>;
}
