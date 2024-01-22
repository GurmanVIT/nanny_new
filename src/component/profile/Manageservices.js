import React, { useState } from 'react'
import { Button, ButtonGroup, Form, ToggleButton } from 'react-bootstrap'

const Manageservices = () => {

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '2' },
    ];


    return (
        <>
            <div className='manageservices'>
                <div className='row'>
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Tutoring nanny</h5>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div >
                    <div className='col-12'>
                        <Form.Select className='input-group'>
                            <option>Hourly Price</option>
                            <option value="1">Fixed Price</option>
                            <option value="2">Hourly Price</option>
                        </Form.Select>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h6>Last Minute Nanny</h6>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='yesbtn'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Nanny sharing</h5>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div >
                    <div className='col-12'>
                        <Form.Select className='input-group'>
                            <option>Hourly Price</option>
                            <option value="1">Fixed Price</option>
                            <option value="2">Hourly Price</option>
                        </Form.Select>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h6>Last Minute Nanny</h6>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='yesbtn'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Part-time & long-term bookings</h5>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div >
                    <div className='col-12'>
                        <Form.Select className='input-group'>
                            <option>Hourly Price</option>
                            <option value="1">Fixed Price</option>
                            <option value="2">Hourly Price</option>
                        </Form.Select>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h6>Last Minute Nanny</h6>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='yesbtn'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Specially priced nanny</h5>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div >
                    <div className='col-12'>
                        <Form.Select className='input-group'>
                            <option>Hourly Price</option>
                            <option value="1">Fixed Price</option>
                            <option value="2">Hourly Price</option>
                        </Form.Select>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h6>Last Minute Nanny</h6>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='yesbtn'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Occasional bookings</h5>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div >
                    <div className='col-12'>
                        <Form.Select className='input-group'>
                            <option>Hourly Price</option>
                            <option value="1">Fixed Price</option>
                            <option value="2">Hourly Price</option>
                        </Form.Select>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h6>Last Minute Nanny</h6>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='yesbtn'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-12">
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h5 className="m-0">Hotel bookings</h5>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                    </div >
                    <div className='col-12'>
                        <Form.Select className='input-group'>
                            <option>Hourly Price</option>
                            <option value="1">Fixed Price</option>
                            <option value="2">Hourly Price</option>
                        </Form.Select>
                    </div>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                            <h6>Last Minute Nanny</h6>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        className='yesbtn'
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className=''>
                        <Button>Update Category</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manageservices
