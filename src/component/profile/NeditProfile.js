import React from 'react'
import { Button } from 'react-bootstrap';
import about from '../../assets/img/about.jpg';

const NeditProfile = () => {
    return (
        <>
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                        <h2 className="m-0">Edit Profile</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-4 edit_photo">
                            <img src={about} alt="logo" />
                            <a href="#" className="ms-3 change_image_btn">Change Porfile Image</a>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4 pb-2" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="First Name" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="number" placeholder="Phone Number" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Enter Email" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Postal Code" />
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type='date' placeholder='MM/DD/YYYY' />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Education" />
                                </div>
                            </form>
                        </div>


                        <div className="col-12">
                            <div className="col-12 mt-3">
                                <Button color="primary" className="profile_button p-2">
                                    SAVE
                                </Button>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default NeditProfile
