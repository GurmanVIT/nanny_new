import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Form } from 'react-bootstrap';

const Documentsnanny = () => {

    const [divs, setDivs] = useState([]);
    const addDiv = () => {
        setDivs([...divs, { id: divs.length + 1 }]);
    };
    const removeDiv = () => {
        if (divs.length > 0) {
            setDivs(divs.slice(0, divs.length - 1));
        }
    };

    return (
        <>
            <div className='doc_nanny'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Upload Documents</h5>
                            <div>
                                <Link className='me-1' onClick={addDiv}><AddIcon className='addicon' /></Link>
                                <Link onClick={removeDiv}><RemoveIcon /></Link>
                            </div>

                        </div>
                    </div>
                    <div className='col-12'>
                        <Form className='d-flex'>
                            <input type='text' placeholder='Name' className='input-group mb-0' />
                            <input type="file" id="myfile" name="myfile" className='btn doc_btn' />
                        </Form>
                        {divs.map((div, index) => (
                            <div key={div.id} className="added-div mt-4">
                                <Form className='d-flex'>
                                    <input type='text' placeholder='Name' className='input-group mb-0' />
                                    <input type="file" id="myfile" name="myfile" className='btn doc_btn' />
                                </Form>
                            </div>
                        ))}
                    </div>
                    <div className='col-12'>
                        <div className='mt-3'>
                            <Button type='button' className='main-button mb-0 btn'>SAVE</Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Documentsnanny
