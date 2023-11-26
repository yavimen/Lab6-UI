import React, {useState} from 'react';
import Modal from "../index";
import './style.css'

const RejectModal = ({data, openModalButton, closeModalButton}) => {
    const {name, surname, details, age } = data;
    const [reason, setReason] = useState('')

    return (
        <Modal openModalButton ={openModalButton} closeModalButton ={closeModalButton}>
            <div className='acceptModal__wrapper'>
                <h3>
                    Reject the patient's appointment request
                </h3>
                <div>Name: {name}</div>
                <div>Surname: {surname}</div>
                <div>Age: {age}</div>
                <div>Details: {details}</div>
                <div className='reason__wrapper'>
                    <h5>The reason for the rejection of the admission request</h5>
                    <textarea className='reason__input' value={reason } onChange={(e) => setReason(e.target.value)}/>
                </div>
            </div>
        </Modal>
    );
};

export default RejectModal;