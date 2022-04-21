import React from 'react'
import ClassNames from 'classnames'


export const Button = (props: any) => {
        return (
            <button
            className={ClassNames('button', props.className, {
                'button--outline': props.outline,
            })}
            >{props.children}
            </button>
        )
}