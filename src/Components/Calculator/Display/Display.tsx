import React from "react";
import s from './Display.module.css'
import {UniversalInput} from "../UniversalInput/UniversalInput";
import {ButtonForCalcRemote} from "../ButtoForCalcRemote/ButtonForCalcRemote";

type DisplayPropsType = {
    currentValueCallback: (text: string) => void
}

export function Display(props: DisplayPropsType) {

    return (
        <div className={s.calcDisplay}>
            <div className={s.displayItems}>
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'31px'}
                                     height={'31px'}
                                     fontSize={'18px'}
                                     ButtonValue={'C'}
                                     currentValueCallback={props.currentValueCallback}
                />


                <UniversalInput fontSize={'18px'}
                                border={'2px solid #67b835'}
                                outline={'none'}
                                backgroundColor={'#1b2e0f'}
                                color={'#67b835'}
                                width={'100px'}
                                height={'24px'}
                />
            </div>
        </div>
    )
}






