import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserprofile } from '../../store/apiSlice/UserprofileSlice';

const Userprofile = () => {


    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.rootReducer.UserProfileReducer.data);
    console.log("Profile Data ===> ",profileData)
      const [NannyEarning, setNannyEarning] = useState(null)
      const [userData ,setUserData] = useState(null)
  
      useEffect(() => {
          dispatch(getUserprofile());
      }, []);
  
      useEffect(() => {
  
          console.log("Profile Data ===> ",profileData)
          if (profileData != null&&profileData.status===1) {
            //setUserprofile(profileData)
            setUserData(profileData.data)
          }
          else if(profileData!=null){
              alert(profileData.message)
          }
      }, [profileData])
  
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center mb-2">
                        <h4 className="m-0">My Profile</h4>
                    </div>
                    {userData!==null && 
                    <div className='card card_profile card_box'>
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">First Name</h6>
                                    <p className="mb-0">{userData.firstName}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Last Name</h6>
                                    <p className="mb-0">{userData.lastName}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Phone Number</h6>
                                    <p className="mb-0">{userData.countryCode}-{userData.mobileNumber}</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                    <h6 className="mb-1 mb-sm-0">Email Address</h6>
                                    <p className="mb-0">{userData.email}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
}
                </div>
            </div>

        </>
    )
}

export default Userprofile
