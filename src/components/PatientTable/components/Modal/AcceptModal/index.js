import React from 'react';
import './style.css'
import Modal from "../index";
const AcceptModal = ({data, openModalButton, closeModalButton}) => {
    const {name, surname, details, age } = data;
    return (
        <Modal openModalButton ={openModalButton} closeModalButton ={closeModalButton}>
            <div className='acceptModal__wrapper'>
                <h3>Accept the appointment of the patient</h3>
                <div>Name: {name}</div>
                <div>Surname: {surname}</div>
                <div>Age: {age}</div>
                <div>Details: {details}</div>
                <div style = {{marginTop: '10px'}}> Set an appointment time:
                    <input className='acceptModal__time' type="date"/>
                </div>
            </div>
        </Modal>
    );
};

export default AcceptModal;