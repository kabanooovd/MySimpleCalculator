import React, {useState} from "react";
import s from './Calculator.module.css'
import {Display} from "./Display/Display";
import {Remote} from "./Remote/Remote";

export type CalculatorPropsType = {}

export function Calculator(props: CalculatorPropsType) {

    let [val, setVal] = useState<string>('')

    const currentValueCallback = (text: string) => {
        if (text === '=') {
            setVal(eval(val).toFixed(2))
        } else if (text === 'C') {
            setVal('')
        } else {
            val += text
            setVal(val)
        }
    }

    return (
        <div className={s.MainCalc}>
            <Display currentValueCallback={currentValueCallback} val={val}/>
            <Remote currentValueCallback={currentValueCallback}/>
        </div>
    )
}







