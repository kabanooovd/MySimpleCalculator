import React from "react";
import s from './Remote.module.css'
import {ButtonForCalcRemote} from "../ButtoForCalcRemote/ButtonForCalcRemote";

type RemotePropsType = {
    currentValueCallback: (text: string) => void

}

export function Remote(props: RemotePropsType) {

    return (
        <div className={s.calcRemote}>

            <div className={s.btnRowStyle}>
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'1'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'2'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'3'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'+'}
                                     currentValueCallback={props.currentValueCallback}
                />
            </div>
            <div className={s.btnRowStyle}>

                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'4'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'5'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'6'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'-'}
                                     currentValueCallback={props.currentValueCallback}
                />
            </div>
            <div className={s.btnRowStyle}>
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'7'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'8'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'9'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'*'}
                                     currentValueCallback={props.currentValueCallback}
                />
            </div>
            <div className={s.btnRowStyle}>

                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'84px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'0'}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'='}
                                     currentValueCallback={props.currentValueCallback}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     border={'2px solid #1b2e0f'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'/'}
                                     currentValueCallback={props.currentValueCallback}
                />
            </div>
        </div>
    )
}

