import React from 'react';

function Header(props) {
    return (
        <div className="header">{props.text}</div>       
    )
}

function Footer(props) {
    return (
        <div className="footer">{props.text}</div>
    )
}

export { Header, Footer };
