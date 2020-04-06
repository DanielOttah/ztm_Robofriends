import React from 'react';

const Scroll = (props) => {
    // return props.children
    return (
        <div style={{ overflowY: 'scroll', boder: "1px solid black", height: '600px' }}>
            {props.children}
        </div>
    )

}
export default Scroll;