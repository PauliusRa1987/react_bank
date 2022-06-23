import { useContext } from "react";
import DataContext from "./DataContext";
import ListLine from "./ListLine";

function List() {

    const { account, message, styleCreateList, setMessageCreate, setModalCreate, setMessage } = useContext(DataContext);
    const create = () => {
        setModalCreate(account);
        setMessageCreate(null) ;
        setMessage(null); 
    }
    return ( 
        <div className="col-12">
            <div className="card mt-4 mb-4 fonts">
                <div className="card-header bege">
                    <h2>List</h2>
                    <div className="buttons">
                <button type="button" className="btn btn-outline-warning btn-lg mr-3" onClick={create}>Create</button>
                </div>
                </div>
                <div className="card-body">
                    <h5 className={styleCreateList}>{message}</h5>
                    <ul className="list-group">
                       {
                        account.map(a => <ListLine  key={a.client} account={a}></ListLine>)
                       }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List;