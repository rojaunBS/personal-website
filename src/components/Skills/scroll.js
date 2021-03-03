import React from 'react'

const Scroll = (props)=>{
    return (
        <div style={{overflowY: 'scroll', border: 'none', height: '600px', width: '100%'}}>
            {props.children}
        </div>
    )
}

export default Scroll;