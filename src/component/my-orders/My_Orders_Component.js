import React from 'react';
import about from '../../assets/img/about.jpg';
import next_btn from '../../assets/img/next_btn.png';
import call_btn from '../../assets/img/call_btn.png';
import founder from '../../assets/img/founder.jpg';
import StarIcon from '@mui/icons-material/Star';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Link } from 'react-router-dom';


const My_Orders_Component = () => {
    return (
        <>
            <div class="container">
                <div class="row order_card mb-5">
                    <Tabs>
                        <TabList>
                            <Tab>Ongoing</Tab>
                            <Tab>Upcoming</Tab>
                            <Tab>Past</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="all_order_box">

                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} alt='about' class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='ordered_persons'>
                                        <div className='nanny-small-info mt-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={founder} alt='nanny' class="rounded-circle" />
                                                    <div>
                                                        <h4>Lottie Cortez</h4>
                                                        <h6><StarIcon /> 4.5</h6>
                                                    </div>
                                                </div>
                                                <div >
                                                    <button className='btn-ongiing'>On the way</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='ordered_persons'>
                                        <div className='nanny-small-info mt-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={founder} alt='nanny' class="rounded-circle" />
                                                    <div>
                                                        <h4>Lottie Cortez</h4>
                                                        <h6><StarIcon /> 4.5</h6>
                                                    </div>
                                                </div>
                                                <div >
                                                    <button className='btn-ongiing'>On the way</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='ordered_persons'>
                                        <div className='nanny-small-info mt-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={founder} alt='nanny' class="rounded-circle" />
                                                    <div>
                                                        <h4>Lottie Cortez</h4>
                                                        <h6><StarIcon /> 4.5</h6>
                                                    </div>
                                                </div>
                                                <div >
                                                    <button className='btn-ongiing'>On the way</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div className="all_order_box">

                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='upcoming_option mt-2 pt-2'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div >
                                                    <Link to="#" className='mb-0'>Cancel Booking</Link>
                                                </div>
                                                <div>
                                                    <div class="upcoming_btns d-flex align-items-center">
                                                        <Link to="#" class="me-3"><img src={next_btn} alt="logo" /></Link>
                                                        <Link to="#"><img src={call_btn} alt="logo" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='upcoming_option mt-2 pt-2'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div >
                                                    <Link to="#" className='mb-0'>Cancel Booking</Link>
                                                </div>
                                                <div>
                                                    <div class="upcoming_btns d-flex align-items-center">
                                                        <Link to="#" class="me-3"><img src={next_btn} alt="logo" /></Link>
                                                        <Link to="#"><img src={call_btn} alt="logo" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='upcoming_option mt-2 pt-2'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div >
                                                    <Link to="#" className='mb-0'>Cancel Booking</Link>
                                                </div>
                                                <div>
                                                    <div class="upcoming_btns d-flex align-items-center">
                                                        <Link to="#" class="me-3"><img src={next_btn} alt="logo" /></Link>
                                                        <Link to="#"><img src={call_btn} alt="logo" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="all_order_box">

                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='ordered_persons'>
                                        <div className='nanny-small-info mt-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={founder} alt='nanny' class="rounded-circle" />
                                                    <div>
                                                        <h4>Lottie Cortez</h4>
                                                        <h6><StarIcon /> 4.5</h6>
                                                    </div>
                                                </div>
                                                <div >
                                                    <button className='btn-success-nany'>Success</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='ordered_persons'>
                                        <div className='nanny-small-info mt-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={founder} alt='nanny' class="rounded-circle" />
                                                    <div>
                                                        <h4>Lottie Cortez</h4>
                                                        <h6><StarIcon /> 4.5</h6>
                                                    </div>
                                                </div>
                                                <div >
                                                    <button className='btn-success-nany'>Success</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card nany_orders'>
                                    <div className='card.body d-flex'>
                                        <div className='card.img mr-2'>
                                            <img src={about} class="rounded-circle" />
                                        </div>
                                        <div>
                                            <div className='card-title'>
                                                <h6>Ocational Nanny</h6>
                                                <p class="text-sm-end text-md-start text-lg-end">$120</p>
                                            </div>

                                            <div className='Card.Text'>
                                                <div class="nanny-info">
                                                    <div class="location mb-1 d-flex align-items-baseline"><i class=" fa fa-location me-1"></i><span>48752 mohali punjab hn  mohali punjab</span></div>
                                                    <p class="time mb-0 text-truncate">25 Jan <span>05:20 PM</span></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='ordered_persons'>
                                        <div className='nanny-small-info mt-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={founder} alt='nanny' class="rounded-circle" />
                                                    <div>
                                                        <h4>Lottie Cortez</h4>
                                                        <h6><StarIcon /> 4.5</h6>
                                                    </div>
                                                </div>
                                                <div >
                                                    <button className='btn-cancel-nany'>Cancelled</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default My_Orders_Component;