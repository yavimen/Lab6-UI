import React, {useState} from 'react';
import './style.css'
import AcceptModal from "../Modal/AcceptModal";
import ChangeModal from "../Modal/ChangeModal";
import RejectModal from "../Modal/RejectModale";

const PatientTableItem = ({data}) => {
    const {name, surname, details, age} = data;

    return (
        <>
            <div className='patientTableItem'>
                <div>Name: {name}</div>
                <div>Surname: {surname}</div>
                <div>Age: {age}</div>
                <div>Details: {details}</div>
                <AcceptModal openModalButton={<button
                    className='patientTableItem-btn patientTableItem-btn--accept'>Accept
                </button>}
                             closeModalButton={<button
                                 className='patientTableItem-btn patientTableItem-btn--accept'>Accept
                             </button>}
                             data={data}
                />
                <RejectModal openModalButton={<button
                    className='patientTableItem-btn patientTableItem-btn--reject'>Reject
                </button>} data={data} closeModalButton={<button
                    className='patientTableItem-btn patientTableItem-btn--accept'>Accept
                </button>}/>
                <ChangeModal openModalButton={<button
                    className='patientTableItem-btn patientTableItem-btn--change'>Change
                </button>} closeModalButton={<button
                    className='patientTableItem-btn patientTableItem-btn--accept'>Accept
                </button>} data={data}/>
            </div>
        </>
    );
};

export default PatientTableItem;