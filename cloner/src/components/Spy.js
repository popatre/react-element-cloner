import React, { cloneElement } from "react";

export default function Spy({ children }) {
    const childrenArray = React.Children.toArray(children);

    const cloned = childrenArray.map((child) => {
        console.log(child.ref.current);
        return child;
    });

    return <div>{cloned}</div>;
}
