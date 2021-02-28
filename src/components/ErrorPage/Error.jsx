import React from 'react';

const Error = props => {
    return (
        <div>
            <button onClick={() => props.history.push('/')}>Go Home</button>
            Error
        </div>
    )
}

export default Error