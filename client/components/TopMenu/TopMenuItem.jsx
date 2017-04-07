import React from 'react';

const TopMenu = (props) => {
    return (<li onClick="{props.onClick}">{props.text}</li>);
}
