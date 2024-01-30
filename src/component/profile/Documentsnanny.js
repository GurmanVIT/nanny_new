import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Button } from 'react-bootstrap';
import Background from '../../assets/img/kycBG.svg';
import { DeleteForever } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

const Documentsnanny = () => {

    const dispatch = useDispatch();
    const Uploaddocumentdata = useSelector((state) => state.rootReducer.DocumentsnannyReducer)

    const [divs, setDivs] = useState([]);
    const addDiv = () => {
        setDivs([...divs, { id: divs.length + 1 }]);
    };
    const removeDiv = () => {
        if (divs.length > 0) {
            setDivs(divs.slice(0, divs.length - 1));
        }
    };

    const [pan_image, setpan_image] = useState('');
    const [pan_image_path, setpan_image_path] = useState('');

    return (
        <>
            <div className='doc_nanny'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Upload Documents</h5>
                            <div>
                                <Link className='me-1' onClick={addDiv}><AddIcon className='addicon' /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='upload mt-3 upload-new'>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="input-item input-with-label">
                                        <label className="input-item-label">Documents Name <span className="text-danger">*</span></label>
                                        <input className="w-100 input-group" type="text" placeholder='Documents Name' />
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className='d-flex align-items-center justify-content-around'>
                                        <div className="upload-box" style={{ backgroundImage: `url(${pan_image_path === '' ? Background : pan_image_path})` }} >
                                            <div className="upload-zone dropzone dz-clickable">
                                                <div className="dz-message" data-dz-message="">
                                                    <input id='doc-front' type="file" className='temprary-input' accept="image/*" onChange={(e: any) => { setpan_image(e.target.files[0]); setpan_image_path(URL.createObjectURL(e.target.files[0])) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <Link onClick={removeDiv} className='text-danger'><DeleteForever /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {divs.map((div, index) => (
                            <div key={div.id} className="added-div mt-4">
                                <div className='upload mt-3 upload-new'>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="input-item input-with-label">
                                                <label className="input-item-label">Documents Name <span className="text-danger">*</span></label>
                                                <input className="w-100 input-group" type="text" placeholder='Documents Name' />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className='d-flex align-items-center justify-content-around'>
                                                <div className="upload-box" style={{ backgroundImage: `url(${pan_image_path === '' ? Background : pan_image_path})` }} >
                                                    <div className="upload-zone dropzone dz-clickable">
                                                        <div className="dz-message" data-dz-message="">
                                                            <input id='doc-front' type="file" className='temprary-input' accept="image/*" onChange={(e: any) => { setpan_image(e.target.files[0]); setpan_image_path(URL.createObjectURL(e.target.files[0])) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link onClick={removeDiv} className='text-danger'><DeleteForever /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
