import React from 'react'

const Userprofile = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center mb-2">
                        <h4 className="m-0">My Profile</h4>
                    </div>
                    <div className='card card_profile card_box'>
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">First Name</h6>
                                    <p className="mb-0">Nanny 1</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Last Name</h6>
                                    <p className="mb-0">Nanny 1</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Phone Number</h6>
                                    <p className="mb-0">(+341) 252 4241</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Email Address</h6>
                                    <p className="mb-0">njkbcsv@gmsimc.com</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Userprofile
