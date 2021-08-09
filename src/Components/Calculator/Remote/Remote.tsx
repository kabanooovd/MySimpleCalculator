import React from "react";
import s from './Remote.module.css'
import {ButtonForCalcRemote} from "../ButtoForCalcRemote/ButtonForCalcRemote";

type RemotePropsType = {}

export function Remote(props: RemotePropsType) {

    return (
        <div className={s.calcRemote}>

            <div className={s.btnRowStyle}>
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'1'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'2'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'3'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'+'}
                />
            </div>
            <div className={s.btnRowStyle}>

                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'4'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'5'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'6'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'-'}
                />
            </div>
            <div className={s.btnRowStyle}>
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'7'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'8'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'9'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'*'}
                />
            </div>
            <div className={s.btnRowStyle}>

                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'84px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'0'}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'='}
                />
                <ButtonForCalcRemote BackgroundColor={'#67b835'}
                                     color={'#1b2e0f'}
                                     width={'40px'}
                                     height={'40px'}
                                     fontSize={'18px'}
                                     ButtonValue={'/'}
                />
            </div>
        </div>
    )
}

