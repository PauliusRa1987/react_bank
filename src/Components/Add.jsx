import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";

function Add() {
    const { modalAccount, setModalAccount, setAddToAccount} = useContext(DataContext);

    const [sasNr, setSasNr] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [suma, setSuma] = useState('');
    const [newSuma, setNewSuma] = useState('');
    const close = () => {
        setModalAccount(null);
    }

    useEffect(() => {
        if (null === modalAccount) return;
        setSasNr(modalAccount.sasNr);
        setName(modalAccount.name);
        setSurname(modalAccount.surname);
        setSuma(modalAccount.suma);
        setNewSuma(modalAccount.newSuma);
    }, [modalAccount])

    const add = () => {
        setAddToAccount({newSuma, id: modalAccount.client});
        setModalAccount(null);
    }

    if (null === modalAccount) {
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Add</h2>
                        <button type="button" className="close" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">
                            <div className="form-group">
                        <label>Account number</label>
                        <input type="text" className="form-control" value={sasNr} readOnly/>

                    </div> 
                            <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} readOnly/>
               
                    </div>
                    <div className="form-group">
                        <label>Surname</label>
                        <input type="text" className="form-control" value={surname} readOnly/>
            
                    </div>
                    <div className="form-group">
                        <label>Balance</label>
                        <input type="text" className="form-control" value={suma} readOnly/>
            
                    </div>
                    <div className="form-group">
                        <label>Amount to add</label>
                        <input type="number" className="form-control"  onChange={e => setNewSuma(e.target.value)}/>
                       
                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success" onClick={add}>Save changes</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;