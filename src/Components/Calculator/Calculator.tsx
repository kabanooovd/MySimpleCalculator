import React, {useState} from "react";
import s from './Calculator.module.css'
import {Display} from "./Display/Display";
import {Remote} from "./Remote/Remote";

export type CalculatorPropsType = {}

export function Calculator(props: CalculatorPropsType) {

    let [val, setVal] = useState<string>('')
    const [error, setError] = useState(false)

    const currentValueCallback = (text: string) => {
        if (text === '=') {
            setVal(evalIsEvil(val).toFixed(1))
        } else if (text === 'C') {
            setVal('')
            setError(false)
        } else if (val.length > 8) {
            setVal(val)
        } else {
            val += text
            setVal(val)
        }
    }

    function evalIsEvil(str: string): number {                                  // ф-я принимает математическое выражение ввиде строки
        let arrToFindOperator = str.split('')                           // Разбриваем строку на массив элементов
        let operator = ''                                                       // Создаем заготовку для определения в строке оператора
        for (let i = 0; i < arrToFindOperator.length; i++) {                    // Перебор строки для выявления оператора
            if (arrToFindOperator[i] === '+' ||                                 // Возможный оператор
                arrToFindOperator[i] === '-' ||                                 // Возможный оператор
                arrToFindOperator[i] === '*' ||                                 // Возможный оператор
                arrToFindOperator[i] === '/')                                   // Возможный оператор
            {
                operator = arrToFindOperator[i]                                 // Определяем полученный оператор
            }
        }
        let arrForNums = str.split(operator)                                    // Сплитуем строку на массив 2х эл-в по оператору
        if (arrForNums[1] === '') setError(true)
        let num1 = Number(arrForNums[0])                                        // Первый эл-т явл-ся первым операндом
        let num2 = Number(arrForNums[1])                                        // Второй эл-т явл-ся вторым операндом
        const calcNums = (num1: number, num2: number, operator: string) => {    // ф-я пренемает 2 операнда и оператор
            if (operator === '+') {                                             // Условное ветвление по полученному оператору
                return num1 + num2                                              // Обработка операндов в зависимомти от оператора
            } else if (operator === '-') {
                return num1 - num2
            } else if (operator === '*') {
                return num1 * num2
            } else if (operator === '/') {
                return num1 / num2
            } else {
                return 0                                                        // Если один из элементво не корректен то ф-я вернет 0
            }
        }
        return calcNums(num1, num2, operator)                                   // Ф-я вернет результат математического вычисления str
    }

    return (
        <div className={s.MainCalc}>
            <Display currentValueCallback={currentValueCallback}
                     val={val}
                     error={error}
            />

            <Remote currentValueCallback={currentValueCallback}/>
        </div>
    )
}



