import React, { cloneElement, useState } from "react";

export default function ToggleInputs({ children }) {
    const childrenArray = React.Children.toArray(children);

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(!isDisabled);
    };
    const cloned = childrenArray.map((child) => {
        return cloneElement(child, { disabled: isDisabled });
    });

    return (
        <div>
            {cloned} <button onClick={handleClick}>click</button>
        </div>
    );
}
