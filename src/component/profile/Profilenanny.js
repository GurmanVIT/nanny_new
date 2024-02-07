import React, { useEffect, useState } from 'react';
import about from '../../assets/img/about.jpg';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Earning from './Earning';
import { useDispatch, useSelector } from 'react-redux';
import Manageservices from './Manageservices';
import Documentsnanny from './Documentsnanny';
import Contactus from './Contactus';
import Nannyprofile from './Nannyprofile';
import { getNannyProfile } from '../../store/apiSlice/NannyprofileSlice';
import NeditProfile from './NeditProfile';
import Nannybooking from '../Nannybooking/Nannybooking';
import Availability from '../Availability/Availability';
import { MenuOutlined } from '@mui/icons-material';
import NannyPayments from './NannyPayments';


const Profilenanny = () => {


    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.rootReducer.nannyProfileReducer.data);

    const [NannyEarning, setNannyEarning] = useState(null)
    const [nannyProfile, setNannyProfile] = useState(null)

    useEffect(() => {
        dispatch(getNannyProfile());
    }, []);

    useEffect(() => {

        console.log("Profile Data ===> ", profileData)
        if (profileData != null && profileData.status === 1) {
            setNannyProfile(profileData.data)
        }
        else if (profileData != null) {
            alert(profileData.message)
        }
    }, [profileData])

    //const [openModal2, setOpenModal2] = useState(false);

    //const onOpenModal2 = () => {
    //    setOpenModal2(true);
    //};

    //const onCloseModal2 = () => {
    //    setOpenModal2(false);
    //};



    //useEffect(() => {
    //    dispatch(fetchEarnAsync());
    //}, []);

    //useEffect(() => {
    //    if (data != null) {
    //        //setNannyEarning(data.data)
    //    }
    //}, [data])



    return (
        <>
            <div className="coustom_container">
                <div className='top-padding'>
                    <Tabs>
                        <div className="row mb-5">
                            <div className="col-lg-3 mb-3 mb-md-0 h-100">
                                <div className="card  rounded overflow-hidden p-3 card_height">
                                    <div className="profile_photo text-center p-2">
                                        <img src={about} alt="profile" />
                                        {nannyProfile!=null&&
                                        <h4 className="mt-3">{nannyProfile.firstName} {nannyProfile.lastName}</h4>}
                                        {/*<div className="">
                                            <MenuOutlined onClick={onOpenModal2} />
                                        </div>*/}
                                    </div>
                                    <TabList className="profile_edit_options">
                                        <Tab className="profile_option">
                                            <span className="ms-2">My Booking</span>
                                        </Tab >
                                        <Tab className="profile_option">
                                            <span className="ms-2">My Profile</span>
                                        </Tab>
                                        <Tab className="profile_option">
                                            <i className="fa fa-edit"></i>
                                            <span className="ms-2">Edit Profile</span>
                                        </Tab>
                                        <Tab className="profile_option">
                                            <span className="ms-2">Earning</span>
                                        </Tab>
                                        <Tab className="profile_option" >
                                            <span className="ms-2">Payments</span>
                                        </Tab>
                                        <Tab className="profile_option">
                                            <span className="ms-2">Manage Services</span>
                                        </Tab >

                                        <Tab className=" profile_option">
                                            <span className="ms-2">Documents</span>
                                        </Tab >
                                        <Tab className="profile_option">
                                            <span className="ms-2">Contact Us</span>
                                        </Tab >
                                        <Tab className="profile_option">
                                            <span className="ms-2">Availability</span>
                                        </Tab>
                                    </TabList >
                                   
                                </div>
                            </div >
                            <div className="col-lg-9">
                                <div className="card  rounded p-3 card_height">
                                    <TabPanel>
                                        <Nannybooking />
                                    </TabPanel>
                                    <TabPanel>
                                        {nannyProfile !== null &&
                                            <Nannyprofile nannyData={nannyProfile} />
                                        }

                                    </TabPanel>
                                    <TabPanel>
                                        <NeditProfile />
                                    </TabPanel>

                                    <TabPanel>
                                        <Earning />
                                    </TabPanel>

                                    <TabPanel>
                                        <NannyPayments/>
                                    </TabPanel>

                                    <TabPanel>
                                        <Manageservices />
                                    </TabPanel>

                                    <TabPanel>
                                        <Documentsnanny />
                                    </TabPanel>
                                    <TabPanel>
                                        <Contactus />
                                    </TabPanel>
                                    <TabPanel>
                                        <Availability />
                                    </TabPanel>
                                </div>
                            </div >
                        </div>
                    </Tabs>
                </div>
            </div >
        </>
    )
}

export default Profilenanny
