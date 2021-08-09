import React from "react";
import s from './ButtonForCalcRemote.module.css'

type ButtonForCalcRemoteType = {
    BackgroundColor: string
    color: string
    width: string
    height: string
    fontSize: string
    ButtonValue: string
    currentValueCallback: (text: string) => void
    border: string
}



export function ButtonForCalcRemote (props: ButtonForCalcRemoteType) {

    const ButtonStyle = {
        width: props.width,
        height: props.height,
        backgroundColor: props.BackgroundColor,
        color: props.color,
        fontSize: props.fontSize,
        border: props.border
    }

    const currentValueCallback = () => {
        props.currentValueCallback(props.ButtonValue)
    }

    return(
        <button style={ButtonStyle}
                className={s.BtnAdditionalStyles}
                onClick={currentValueCallback}
        >
            <b>{props.ButtonValue}</b>
        </button>
    )
}








