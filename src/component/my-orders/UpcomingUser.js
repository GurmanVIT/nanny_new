import React, { useEffect, useState } from 'react';
import next_btn from '../../assets/img/next_btn.png';
import call_btn from '../../assets/img/call_btn.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, upcommingUserList } from '../../store/apiSlice/UpcommingSlice';

const UpcomingUser = () => {

    const upcommingData = useSelector((state) => state.rootReducer.upcommingReducer.data)
    const [dataList,setDataList] = useState(null)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(upcommingUserList(0))

        return()=>{
            dispatch(clearData())
        }
    },[])

    useEffect(()=>{
        console.log("upcommingData data ===> ",upcommingData)
        if(upcommingData!=null && upcommingData.status === 1){
            setDataList(upcommingData.data.data)
        }
    },[upcommingData])

    return (
        <>
            <div className="row all_order_box">

                {dataList!=null&&dataList.map((item)=>
                <div className='col-md-6'>
                 <div className='card nany_orders'>
                    <div className='card.body d-flex'>
                        <div className='card.img mr-2'>
                            <img src={item.nannyId.profileImage} className="rounded-circle" />
                        </div>
                        <div>
                            <div className='card-title'>
                                <h6>{item.nannyId.firstName} {item.nannyId.lastName}</h6>
                                <p className="text-sm-end text-md-start text-lg-end">${item.price}</p>
                            </div>

                            <div className='Card.Text'>
                                <div className="nanny-info">
                                    <div className="location mb-1 d-flex align-items-baseline"><i className=" fa fa-location me-1"></i><span>{item.address  }</span></div>
                                    <p className="time mb-0 text-truncate">{item.date} <span>{item.time}</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='upcoming_option mt-2 pt-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div >
                                    <Link to="#" className='mb-0'>{item.status===0?"Cancel Booking":item.status===1?"Request Accepted":"Canceled"}</Link>
                                </div>
                                <div>
                                    <div className="upcoming_btns d-flex align-items-center">
                                        <Link to="#" className="me-3"><img src={next_btn} alt="logo" /></Link>
                                        <Link to="#"><img src={call_btn} alt="logo" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>)}
               
           
            </div>
        </>
    )
}

export default UpcomingUser
