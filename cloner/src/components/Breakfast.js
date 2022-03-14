import React, { cloneElement } from "react";

export default function Breakfast({ children, overwrite }) {
    const childrenArray = React.Children.toArray(children);

    const cloned = childrenArray.map((child) => {
        if (overwrite) {
            return cloneElement(child, { food: overwrite });
        } else {
            return child;
        }
    });
    return <div>{cloned}</div>;
}
