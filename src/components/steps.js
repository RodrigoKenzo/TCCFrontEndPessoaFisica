import * as React from 'react'
import { positionBottom, row, number } from './steps.module.scss'

const Steps = () => {
    return(
        <div className={positionBottom}>
            <div className={row}>
                <h2 className={number}>1</h2>
                <h2 className={number}>2</h2>
                <h2 className={number}>3</h2>
                <h2 className={number}>4</h2>
                <h2 className={number}>5</h2>
            </div>
        </div>
    )
}

export default Steps