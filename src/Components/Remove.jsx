import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";

function Remove() {
    const { modalAccountRem,
        setModalAccountRem,
        setRemToAccount } = useContext(DataContext);

    const [sasNr, setSasNr] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [suma, setSuma] = useState('');
    const [newSuma, setNewSuma] = useState('');
    const close = () => {
        setModalAccountRem(null);
    }

    useEffect(() => {
        if (null === modalAccountRem) return;
        setSasNr(modalAccountRem.sasNr);
        setName(modalAccountRem.name);
        setSurname(modalAccountRem.surname);
        setSuma(modalAccountRem.suma);
        setNewSuma(modalAccountRem.newSuma);
    }, [modalAccountRem])

    const remove = () => {
        setRemToAccount({newSuma, id: modalAccountRem.client});
        setModalAccountRem(null);
    }

    if (null === modalAccountRem) {
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Remove $$$</h2>
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
                        <label>Amount to remove</label>
                        <input type="number" className="form-control"  onChange={e => setNewSuma(e.target.value)}/>

                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success" onClick={remove}>Save changes</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Remove;