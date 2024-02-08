import React from 'react'

const Nannyprofile = ({ nannyData }) => {
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
                                    <p className="mb-0">{nannyData.firstName}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Last Name</h6>
                                    <p className="mb-0">{nannyData.lastName}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Phone Number</h6>
                                    <p className="mb-0">{nannyData.countryCode}-{nannyData.mobileNumber}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Email Address</h6>
                                    <p className="mb-0">{nannyData.email}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Date OF Birth</h6>
                                    <p className="mb-0">{nannyData.dateOfBirth}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Education</h6>
                                    <p className="mb-0">{nannyData.education}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Number of Years Experience</h6>
                                    <p className="mb-0">{nannyData.experienceOfYears}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Family Background</h6>
                                    <p className="mb-0">{nannyData.familyBackground}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Country</h6>
                                    <p className="mb-0">{nannyData.country}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Zipcode</h6>
                                    <p className="mb-0">{nannyData.pinCode}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Nannyprofile
