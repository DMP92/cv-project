import React from 'react';

function InputCreation(props) {
    return (
        <div className={ props.containerName }>
            <label>{ props.label}</label>
            <input 
                className={ props.cName }
                    type={ props.type }
                    placeholder={ props.placeholder }

                    onFocus={ props.onFocus }
                    onBlur={ props.onBlur }
                    onChange={ props.onChange }
            >   
                { props.text }
            </input>
        </div>
    );
}

export default InputCreation;