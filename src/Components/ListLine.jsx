import { useContext } from "react";
import DataContext from "./DataContext";

function ListLine({ account}) {

    const {setDeleteAccount, setModalAccount, setModalAccountRem, setMessage} = useContext(DataContext);

    const remove = () => {
        setDeleteAccount(account);
        setMessage(null);
    }

    const add = () => {
        setModalAccount(account);
        setMessage(null);
    }
    const out = () => {
        setModalAccountRem(account);
        setMessage(null);
    }

    return (
        <li className="list-group-item bege" >
            <div className="one-animal">
                <div className="content2">
                <b>IBAN:</b> {account.sasNr}
                <b>Name:</b> {account.name} 
                <b>Surname:</b> {account.surname}
                <b>ID:</b>{account.personId}
                <b>Sum: </b> {account.suma}$ 
                </div>
            </div>
                <div className="buttons">
                <button type="button" className="btn btn-outline-success mr-3" onClick={add}>Add</button>
                <button type="button" className="btn btn-outline-primary mr-3" onClick={out}>Out</button>
                    <button type="button" className="btn btn-outline-danger" onClick={remove}>Delete</button>
                </div>
            

        </li>
    );
}

export default ListLine;