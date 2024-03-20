import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
const OutEventMappings = ({ match }) => {
    const [lenderName, setLenderName] = useState(match.params.LenderName || "");
    const [gridData, setGridData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    useEffect(() => {
        axios.get(`OutboundEvents/GetEvents/${lenderName.split(":")[1]}`)
            .then(response => {
                setGridData(response.data);
            });
    }, [lenderName]);
    const addNewEvent = () => {
        setModalShow(true);
        setSelectedRow({
            EID: "0",
            ExternalEvent: "",
            Name: "",
            Description: "",
            Services: ""
        });
    };
    const editEvent = (row) => {
        setModalShow(true);
        setSelectedRow(row);
    };
    const saveEvent = (row) => {
        if (row.EID === '0') {
            setGridData([...gridData, { ...row, id: Math.floor(100 + Math.random() * 1000) }]);
        } else {
            setGridData(
                gridData.map(item =>
                    item.EID === row.EID
                        ? { ...item, ...row }
                        : item
                )
            );
        }
        setModalShow(false);
    };
    const removeEvent = (row) => {
        setGridData(gridData.filter(item => item !== row));
        setModalShow(false);
    };
    return (
        <div>
            <button onClick={() => addNewEvent()}>Add New Event</button>
            {gridData.map((row, index) => (
                <div key={index} onDoubleClick={() => editEvent(row)}>
                    {row.ExternalEvent} - {row.Name}
                    <button onClick={() => removeEvent(row)}>Delete</button>
                </div>
            ))}
            <OutEventModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSave={saveEvent}
                row={selectedRow}
            />
        </div>
    );
};
const OutEventModal = ({ show, onHide, onSave, row }) => {
    const [eventData, setEventData] = useState(row);
    useEffect(() => {
        setEventData(row);
    }, [row]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData(prev => ({ ...prev, [name]: value }));
    };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Inputs for event data */}
                <input name="ExternalEvent" value={eventData.ExternalEvent} onChange={handleChange}/>
                <input name="Name" value={eventData.Name} onChange={handleChange}/>
                <input name="Description" value={eventData.Description} onChange={handleChange}/>
                <input name="Services" value={eventData.Services} onChange={handleChange}/>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => onSave(eventData)}>Save Changes</button>
            </Modal.Footer>
        </Modal>
    );
};
export default OutEventMappings;