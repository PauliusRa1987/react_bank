import { useContext } from "react";
import { useState} from "react";
import DataContext from "./DataContext";

function Create() {
  const { setCreateAccount,  messageCreate, styleCreate, modalCreate, setModalCreate } =
    useContext(DataContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personId, setPersonId] = useState("");

  const close = () => {
    setModalCreate(null);
  };

  const create = () => {
    setCreateAccount({ name, surname, personId });
    setName("");
    setSurname("");
    setPersonId("");

  };
  if (null === modalCreate) {
    return null;
  }

  return (
   
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Create</h2>
            <button type="button" className="close" onClick={close}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              <h6 className={styleCreate}>{messageCreate}</h6>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <small className="form-text text-muted">
                  Please enter your Name.
                </small>
              </div>
              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  className="form-control"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <small className="form-text text-muted">
                  Please enter your Surname.
                </small>
              </div>
              <div className="form-group">
                <label>Identity number</label>
                <input
                  type="number"
                  className="form-control"
                  value={personId}
                  onChange={(e) => setPersonId(e.target.value)}
                />
                <small className="form-text text-muted">
                  Please enter your Identity number.
                </small>
              </div>
              <div className="marg">
                <button
                  type="button"
                  className="btn btn-outline-success "
                  onClick={create}
                >
                  Create
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary "
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;

