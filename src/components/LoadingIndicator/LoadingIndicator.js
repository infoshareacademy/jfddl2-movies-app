import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const style = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    textAlign: 'center'
}

const LoadingIndicator = () => (
    <div style={style}>
       Loading ...
        <ProgressBar active now={100}/>
    </div>
)

export default LoadingIndicator