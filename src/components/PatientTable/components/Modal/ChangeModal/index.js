import React, {useState} from 'react';
import Modal from "../index";
import './style.css'

const ChangeModal = ({data, openModalButton, closeModalButton}) => {
    const {name, surname, details, age} = data;

    const [patientData, setPatientData] = useState({
        name: name,
        surname: surname,
        age: age,
        details: details
    })


    return (
        <Modal openModalButton={openModalButton} closeModalButton={closeModalButton}>
            <div className='acceptModal__wrapper'>
                <h3>Reject the patient's request</h3>
                <div className='acceptModal__field'>Name: <input value={patientData.name}
                                                                 onChange={(e) => setPatientData(e.target.value)}/>
                </div>
                <div className='acceptModal__field'>Surname: <input value={patientData.surname}
                                                                    onChange={(e) => setPatientData(e.target.value)}/>
                </div>
                <div className='acceptModal__field'>Age: <input value={patientData.age}
                                                                onChange={(e) => setPatientData(e.target.value)}/></div>
                <div className='acceptModal__field'>Details: <input value={patientData.details}
                                                                    onChange={(e) => setPatientData(e.target.value)}/>
                </div>
                <div style={{marginTop: '10px'}}> An appointment time:
                    <input className='acceptModal__time' type="date"/>
                </div>
            </div>
        </Modal>
    );
};

export default ChangeModal;