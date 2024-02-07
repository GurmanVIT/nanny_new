import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearData } from '../../store/apiSlice/OngoingNannySlice'
import next_btn from '../../assets/img/next_btn.png';
import call_btn from '../../assets/img/call_btn.png';
import { NannyupcommingUserList } from '../../store/apiSlice/NannyUpcomingSlice';
import { UpdateBookingStatus } from '../../store/apiSlice/UpdateBookingStatusSlice';
import { LocationOn } from '@mui/icons-material';
import { Dropdown } from 'react-bootstrap';


const UpcomingNanny = () => {

  const ongoingData = useSelector((state) => state.rootReducer.NannyupcommingReducer.data)
  //const updateBookstatus = useSelector((state) => state.rootReducer.UpdateBookingStatusReducer.data)
  const [updateBook, setupdateBook] = useState(null)

  console.log("updateBookstatus == >". updateBookstatus)

  const [dataList, setDataList] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(NannyupcommingUserList(0))
    return () => {
      dispatch(clearData())
    }
  }, [])


  const updateBookingStatusApi= (statusVal,bookingId) =>{
    const payload = {
      bookingId:bookingId,
      status: statusVal
    }
    dispatch(UpdateBookingStatus())
  } 

  useEffect(() => {
    console.log("upngoing data ===> ", ongoingData)
    if (ongoingData != null && ongoingData.status === 1) {
      setDataList(ongoingData.data.data)
    }
  }, [ongoingData])

  const onAcceptClick = () => {

  }




  return (
    <>
      <div className="row all_order_box">

        {dataList != null && dataList.map((item) => <div className='col-md-6'>
        <div className='card nany_orders my-2'>
          <div className='card.body d-flex'>
            <div className='card.img mr-2'>
              <img src={item.userId.profileImage} className="rounded-circle" />
            </div>
            <div>
              <div className='card-title'>
                <h6>{item.userId.firstName} {item.userId.lastName}</h6>
                <p className="text-sm-end text-md-start text-lg-end">${item.price}</p>
              </div>

              <div className='Card.Text'>
                <div className="nanny-info">
                  <div className="location mb-1 d-flex align-items-center"><LocationOn /> <span>{item.address}</span></div>
                  <p className="time mb-0 text-truncate">{item.date} <span>{item.time}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='upcoming_option mt-3 pt-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <div >
                  {item.status === 1?
                  <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className='btn-ongiing'>
                  Request Accepted
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => updateBookingStatusApi(2,item._id)}>On The Way</Dropdown.Item>
                    <Dropdown.Item onClick={() => updateBookingStatusApi(3,item._id)}>Reached</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>:<button type='button' className='mb-0 main-button'>{item.status === 0 ? "Accept Request" :  "Canceled"}</button>
                }
                </div>
                {item.status !== 0 ?
                  <div>
                    <div className="upcoming_btns d-flex align-items-center">
                      <Link to="#"><img src={next_btn} alt="logo" /></Link>
                      <Link to="#"><img src={call_btn} alt="logo" /></Link>
                    </div>
                  </div> :
                  <div >
                    <button type='button' className='mb-0 btn-cancel-nany'>Reject Request</button>
                  </div>

                }
              </div>
            </div>
          </div>
        </div>
        </div>)}


      </div>
    </>
  )
}

export default UpcomingNanny
