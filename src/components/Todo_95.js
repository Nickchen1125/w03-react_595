import { useState } from 'react';
import Modal_95 from '../components/Modal_95'
import Backdrop_95 from '../components/Backdrop_95';

function Todo_95(props) {
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler} >Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_95 onClose={closeModalHandler} />}
            {showModal && <Modal_95 onClose={closeModalHandler} text='Are you sure?' />}
        </div>
    );
}

export default Todo_95;