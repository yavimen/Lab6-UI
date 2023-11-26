import * as React from 'react';
import "./style.css"
import PatientTableItem from "./components/PatientTableItem";

const patientData = [
    {
        name: "Jon", surname: "Snow", details: "No details", age: "33"
    },
    {
        name: "Tom", surname: "Smite", details: "No details", age: "41"
    },
    {
        name: "Anna", surname: "Smite", details: "No details", age: "26"
    },
    {
        name: "Jon", surname: "Smite", details: "No details", age: "25"
    },

]
export default function PatientTable() {
    return (
        <div>
            {patientData.map((data) => {
                return <PatientTableItem data={data}/>
            })}
        </div>
    );
}