// This component is a presentatial component which renders a button
// in the context of a result from the places search. ('View' or 'Pin')

import React from 'react';

function Button ( props ) {
    return <button onClick={props.handleClick}>{props.children}</button>;
}
export default Button;
