import './App.css';
import Header from "./components/Header";
import PatientTable from "./components/PatientTable";

function App() {
    return (
        <div className='container'>
            <Header/>
            <br/>
            <PatientTable/>
        </div>
    );
}

export default App;
