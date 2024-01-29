import React, { useEffect, useState } from 'react';
import founder from '../../assets/img/founder.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { NannyOngoingUserList, clearData } from '../../store/apiSlice/OngoingNannySlice';
import { LocationOn, Star } from '@mui/icons-material';



const OngoingNanny = () => {

    const ongoingData = useSelector((state) => state.rootReducer.NannyOngoingReducer.data)
    const [dataList, setDataList] = useState(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(NannyOngoingUserList(1))
        return()=>{
            dispatch(clearData())
        }
    }, [])

    useEffect(() => {
        console.log("Ongoing data ===> ", ongoingData)
        if (ongoingData != null && ongoingData.status === 1) {
            setDataList(ongoingData.data.data)
        }
    }, [ongoingData])


    return (
        <>
            <div className="row all_order_box">
                {
                    dataList != null && dataList.map((item) =>
                    <div className='col-md-6'>
                     <div className='card nany_orders'>
                        <div className='card.body d-flex'>
                            <div className='card.img mr-2'>
                                <img src={item.userId.profileImage} alt='about' className="rounded-circle" />
                            </div>
                            <div>
                                <div className='card-title'>
                                    <h6>{item.userId.firstName} {item.userId.lastName}</h6>
                                    <p className="text-sm-end text-md-start text-lg-end">${item.price}</p>
                                </div>
                                <div className='Card.Text'>
                                    <div className="nanny-info">
                                        <div className="location mb-1 d-flex align-items-center"><LocationOn /><span>{item.address}</span></div>
                                        <p className="time mb-0 text-truncate">{item.date}<span>{item.time}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ordered_persons'>
                            <div className='nanny-small-info mt-2'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img src={founder} alt='nanny' className="rounded-circle" />
                                        <div className='star'>
                                            <h4>{item.categoryId.name}</h4>
                                            <h6><Star /> 4.5</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default OngoingNanny
