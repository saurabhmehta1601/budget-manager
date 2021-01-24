import React from 'react'

export const Alert = ({text,type}) => {
    return (
        <div className={`alert  alert-${type}`} >
           {text}
        </div>
    )
}
