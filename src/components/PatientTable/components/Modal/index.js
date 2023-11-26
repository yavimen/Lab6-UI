import React, {useState} from 'react';
import './style.css';

const Modal = ({children, openModalButton, closeModalButton}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="modal-container">
            <button onClick={openModal} className='modal-container--open'>{
                openModalButton
            }</button>

            {isOpen && (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div>
                            {children}
                        </div>
                        <div style = {{marginTop: "10px",  display: 'flex', gap: "5px", alignItems: 'center'}}>
                            <button onClick={closeModal} className='modal-container--open'> {closeModalButton}</button>
                            <button className='modal-btn--close' onClick={closeModal}>Close Modal</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;