import React, { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import TimeChangeModal from './TimeChangeModal';
import { DeleteForever, SaveAs } from '@mui/icons-material';

const Dayschange = () => {
    const [newTime, setNewTime] = useState('');
    const [show, setShow] = useState(false);
    const [Timechange, setTimechange] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const handleApply = () => {

    //    onApply(newTime);

    //  };


    return (
        <div className='change_day_time'>
            <div className='mt-4'>
                <h6>Select Desired Day</h6>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th colSpan={2} className='text-center'>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </td>
                        <td>Sunday</td>
                        <td>
                            <Button onClick={handleShow}>10:00</Button>

                        </td>
                        <td>
                            <Button>12:00</Button>
                        </td>
                    </tr>


                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} className='modal_address change_time'>
                <Modal.Header closeButton>
                    <Modal.Title>Change Time</Modal.Title>
                </Modal.Header>
                <Modal.Body className='time_change_input'>
                    <input type="time" className='input_time' value={newTime} onChange={(e) => setNewTime(e.target.value)} />
                    <input type="time" className='input_time' value={Timechange} onChange={(e) => setTimechange(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>Apply</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Dayschange
