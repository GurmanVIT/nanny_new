import React, { useEffect, useState } from 'react';
import { Star } from '@mui/icons-material'
import founder from '../../assets/img/founder.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, upcommingUserList } from '../../store/apiSlice/UpcommingSlice';

const PastUser = () => {

    const pastData = useSelector((state) => state.rootReducer.upcommingReducer.data)
    const [dataList,setDataList] = useState(null)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(upcommingUserList(2))
        return()=>{
            dispatch(clearData())
        }
    },[])

    useEffect(()=>{
        console.log("pastData data ===> ",pastData)
        if(pastData!=null && pastData.status === 1){
            setDataList(pastData.data.data)
        }
    },[pastData])
    return (
        <>
            <div className="all_order_box">
                {dataList!=null&&dataList.map((item)=><div className='card nany_orders'>
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
                                    <div className="location mb-1 d-flex align-items-baseline"><span>{item.address}</span></div>
                                    <p className="time mb-0 text-truncate">{item.date} <span>{item.time}</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='ordered_persons'>
                        <div className='nanny-small-info mt-2'>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex'>
                                    <img src={founder} alt='nanny' className="rounded-circle" />
                                    <div>
                                        <h4>{item.categoryId.name}</h4>
                                        {/*<h6><Star /> 4.5</h6>*/}
                                    </div>
                                </div>
                                <div >
                                    <button className='btn-success-nany'>Success</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                }
            </div>
        </>
    )
}

export default PastUser
