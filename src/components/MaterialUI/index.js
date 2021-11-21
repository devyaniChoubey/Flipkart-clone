import React, { useState } from 'react';
import './index.css';

/**

**/

const Modal = (props) => {
    if (!props.visible) {
        return null;
    }
    return (
        <>
            <div className="modalFixedBg">
                <div style={{ position: 'relative' }}>
                    <div className="modalClose" onClick={props.onClose}>X</div>
                    <div className="modalContainer">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

const MaterialInput = (props) => {
    const [focus, setFocus] = useState(false);

    return (
        <div className="materialInput">
        <input className="input" onChange={props.onChange} value={props.value} type={props.type}/>
        </div>
    )
}

const MaterialButton = (props) => {
    return (
        <div style={{ width: '90%' }}>
            <button
                className="materialButton" onClick={props.onClick}
            >
                {props.title && props.title}
            </button>
        </div>

    )
}

const DropdownMenu = (props) => {
    return (
      <div className="headerDropdownContainer">
        {props.menu}
        <div className="dropdown">
          <div className="upArrow"></div>
          {props.firstMenu}
          <ul className="headerDropdownMenu">
            {
              props.menus && props.menus.map((item, index) =>
                <li key={index}><a href={item.href}>{item.label}</a></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }

export {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu
} 