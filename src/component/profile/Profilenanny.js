import React, { useEffect, useState } from 'react';
import about from '../../assets/img/about.jpg';
import visa_payment_card from '../../assets/img/visa-payment-card.png';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Earning from './Earning';
import { useDispatch, useSelector } from 'react-redux';
import Manageservices from './Manageservices';
import Documentsnanny from './Documentsnanny';
import Contactus from './Contactus';
import Nannyprofile from './Nannyprofile';
import { getNannyProfile } from '../../store/apiSlice/NannyprofileSlice';
import NeditProfile from './NeditProfile';


const Profilenanny = () => {


    const dispatch = useDispatch();
  const profileData = useSelector((state) => state.rootReducer.nannyProfileReducer.data);

    const [NannyEarning, setNannyEarning] = useState(null)
    const [nannyProfile ,setNannyProfile] = useState(null)

    useEffect(() => {
        dispatch(getNannyProfile());
    }, []);

    useEffect(() => {

        console.log("Profile Data ===> ",profileData)
        if (profileData != null&&profileData.status===1) {
            setNannyProfile(profileData.data)
        }
        else if(profileData!=null){
            alert(profileData.message)
        }
    }, [profileData])


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
            <div className="container">
                <div className='top-padding'>
                    <Tabs>
                        <div className="row mb-5">
                            <div className="col-md-3 mb-3 mb-md-0 h-100">
                                <card className="rounded overflow-hidden">
                                    <div className="profile_photo text-center p-3">
                                        <img src={about} alt="profile" />
                                        <h2 className="mt-3">My Name</h2>
                                    </div>
                                    <TabList className="profile_edit_options">
                                        <Tab className="p-3 profile_option">
                                            <i className="fa fa-edit"></i>
                                            <span className="ms-2">My Profile</span>
                                        </Tab>
                                        <Tab className="p-3 profile_option">
                                            <i className="fa fa-edit"></i>
                                            <span className="ms-2">Edit Profile</span>
                                        </Tab>
                                        <Tab className="p-3 profile_option">
                                            <i className="fa fa-lock"></i>
                                            <span className="ms-2">Earning</span>
                                        </Tab>
                                        <Tab className="p-3 profile_option" >
                                            <i className="fa fa-cog"></i>
                                            <span className="ms-2">Payments</span>
                                        </Tab>
                                        <Tab className="p-3 profile_option">
                                            <i className="fa fa-cog"></i>
                                            <span className="ms-2">Manage Services</span>
                                        </Tab >
                                        <Tab className="p-3 profile_option">
                                            <i className="fa fa-cog"></i>
                                            <span className="ms-2">Documents</span>
                                        </Tab >
                                        <Tab className="p-3 profile_option">
                                            <i className="fa fa-cog"></i>
                                            <span className="ms-2">Contact Us</span>
                                        </Tab >
                                    </TabList >
                                </card >
                            </div >
                            <div className="col-md-9 h-100">
                                <card className="rounded p-3">
                                    <TabPanel>
                                        {nannyProfile!==null&&
                                      <Nannyprofile nannyData = {nannyProfile}/>
                                        }
                                  
                                    </TabPanel>
                                    <TabPanel>
                                        <NeditProfile/>
                                    </TabPanel>

                                    <TabPanel>
                                    <Earning/>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="row" >
                                            <div className="col-12">
                                                <div className="d-flex align-items-center mb-3 justify-content-between heading_back_btn">
                                                    <div className="d-flex align-items-center">
                                                        {/*<button ><ArrowBackIosNewIcon/></button>*/}
                                                        <h2 className="m-0">Cards</h2>
                                                    </div>
                                                    <button className="card_type d-flex align-items-center rounded">
                                                        <AddIcon /> Add Card
                                                    </button>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="p-3 card_box">
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="card_icon">
                                                                    <img width="w-100" src={visa_payment_card} alt='visa' />
                                                                </div>
                                                                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                            </div>
                                                            <h4 className="mb-3">2521 2521 5252 5215</h4>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="holder_details">
                                                                    <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                                    <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                                </div>
                                                                <button className="delete_btn"><DeleteForeverIcon /></button>
                                                            </div>
                                                        </div>
                                                    </div >
                                                    <div className="col-md-6 ">
                                                        <div className="p-3 card_box">
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="card_icon">
                                                                    <img width="w-100" src={visa_payment_card} alt='visa' />
                                                                </div>
                                                                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                            </div>
                                                            <h4 className="mb-3">2521 2521 5252 5215</h4>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="holder_details">
                                                                    <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                                    <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                                </div>
                                                                <button className="delete_btn"><DeleteForeverIcon /></button>
                                                            </div>
                                                        </div >
                                                    </div >
                                                    <div className="col-md-6 ">
                                                        <div className="p-3 card_box">
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="card_icon">
                                                                    <img width="w-100" src={visa_payment_card} alt='visa' />
                                                                </div>
                                                                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                            </div>
                                                            <h4 className="mb-3">2521 2521 5252 5215</h4>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="holder_details">
                                                                    <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                                    <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                                </div>
                                                                <button className="delete_btn"><DeleteForeverIcon /></button>
                                                            </div>
                                                        </div >
                                                    </div >
                                                    <div className="col-md-6 ">
                                                        <div className="p-3  card_box">
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="card_icon">
                                                                    <img width="w-100" src={visa_payment_card} alt='visa' />
                                                                </div>
                                                                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                            </div>
                                                            <h4 className="mb-3">2521 2521 5252 5215</h4>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="holder_details">
                                                                    <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                                    <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                                </div>
                                                                <button className="delete_btn"><DeleteForeverIcon /></button>
                                                            </div>
                                                        </div >
                                                    </div >
                                                    <div className="col-md-6">
                                                        <div className="p-3 card_box">
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="card_icon">
                                                                    <img width="w-100" src={visa_payment_card} alt='visa' />
                                                                </div>
                                                                <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                            </div>
                                                            <h4 className="mb-3">2521 2521 5252 5215</h4>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="holder_details">
                                                                    <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                                    <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                                </div>
                                                                <button className="delete_btn"><DeleteForeverIcon /></button>
                                                            </div>
                                                        </div >
                                                    </div >
                                                </div >
                                            </div >
                                        </div>
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
                                </card >
                            </div >
                        </div>
                    </Tabs>
                </div>
            </div >
        </>
    )
}

export default Profilenanny
