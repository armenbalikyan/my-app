import React from "react";

export const Button = (props) => {
    const onClick = ()=> props.name === '+'? props.setValue(props.value + 1):props.setValue(props.value - 1);
    
    return (
        <button onClick={onClick}>{props.name}</button>
    )
}