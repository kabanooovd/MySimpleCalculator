import React from "react";
import s from './ButtonForCalcRemote.module.css'

type ButtonForCalcRemoteType = {
    BackgroundColor: string
    color: string
    width: string
    height: string
    fontSize: string
    ButtonValue: string
}



export function ButtonForCalcRemote (props: ButtonForCalcRemoteType) {

    const ButtonStyle = {
        width: props.width,
        height: props.height,
        backgroundColor: props.BackgroundColor,
        color: props.color,
        fontSize: props.fontSize,
    }

    const ClickedButtonHandler = () => {
        // alert('wewew')
    }

    return(
        <button style={ButtonStyle}
                className={s.BtnAdditionalStyles}
                onClick={ClickedButtonHandler}
        >
            <b>{props.ButtonValue}</b>
        </button>
    )
}








