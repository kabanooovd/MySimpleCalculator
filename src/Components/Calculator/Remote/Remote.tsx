import React from "react";
import s from './Remote.module.css'

type RemotePropsType = {

}

export function Remote (props: RemotePropsType) {

    return(
        <div className={s.calcRemote}>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div>
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <div>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
        </div>
    )
}

