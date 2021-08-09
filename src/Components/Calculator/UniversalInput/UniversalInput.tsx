import React from "react";

type UniversalInputPropsType = {
    fontSize: string
    border: string
    outline: string
    backgroundColor: string
    color: string
    width: string
    height: string
    val: string
}

export function UniversalInput (props: UniversalInputPropsType) {

    const InputStyles = {
        fontSize: props.fontSize,
        border: props.border,
        outline: props.outline,
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: props.height
    }

    return(
        <div>
            <div style={InputStyles}>{props.val}</div>
        </div>
    )
}








