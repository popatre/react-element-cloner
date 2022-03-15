import React, { cloneElement } from "react";

export default function Deeprename({ children, message }) {
    const childrenArray = React.Children.toArray(children);

    function iterator(obj) {
        let result = "";
        if (typeof obj.props.children === "object") {
            return iterator(obj.props.children);
        } else {
            result = obj;

            return cloneElement(result, { children: message });
        }
    }

    const cloned = childrenArray.map((child) => {
        const string = iterator(child);

        return string;
    });

    return <div>{cloned}</div>;
}
