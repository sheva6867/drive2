import './Modal.scss'
import React from "react";
import closeIcon from '../../assets/svg/x.svg'


interface Props {
    component: JSX.Element;
    showModal: () => void;

}

function Modal({component, showModal}: Props) {

    return (
        <div className={'modal-container'}>
            <div className={'modal'}>
                <img onClick={showModal} className={'close'} src={closeIcon} alt="hui"/>
                {component}
            </div>
        </div>
    )
}

export default Modal;