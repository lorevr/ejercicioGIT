import React from 'react';
import './styles.css'

const ListOption = (props) => {
    console.log(props);
    return (
        <li {...props}>{props.children} {props.tiempo}</li>
    )
}

export default ListOption;