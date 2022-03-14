import React, { cloneElement } from "react";

export default function Spy({ children, prevInputRef }) {
    const childrenArray = React.Children.toArray(children);

    const cloned = childrenArray.map((child) => {
        console.log(prevInputRef.current);
        return child;
    });

    return <div>{cloned}</div>;
}
