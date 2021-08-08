import React, {useState} from "react";
import s from './Calculator.module.css'
import {Display} from "./Display/Display";
import {Remote} from "./Remote/Remote";

export type CalculatorPropsType = {
    someCalc: string
    setSomeCalc: (someCalc: string) => void
}

export function Calculator(props: CalculatorPropsType) {


    return (
        <div className={s.MainCalc}>
            <Display />
            <Remote />
        </div>
    )
}







