import React, { useEffect, useState } from 'react';
import { Star } from '@mui/icons-material'
import founder from '../../assets/img/founder.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, upcommingUserList } from '../../store/apiSlice/UpcommingSlice';
import nannyicon from '../../assets/img/nany_icon.png';
import { Button, Form, Modal } from 'react-bootstrap';
import { Addratingbooking } from '../../store/apiSlice/AddRatingToBookingSlice';

const PastUser = () => {

    const pastData = useSelector((state) => state.rootReducer.upcommingReducer.data)
    const [dataList, setDataList] = useState(null)
    const rateingData = useSelector((state) => state.rootReducer.AddratingbookingReducer.data)
    const [bookingId, setbookingId] = useState('')
    const [star, setstar] = useState('')
    const [comment, setcomment] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(upcommingUserList(2))
        return () => {
            dispatch(clearData())
        }
    }, [])

    useEffect(() => {
        console.log("pastData data ===> ", pastData)
        if (pastData != null && pastData.status === 1) {
            setDataList(pastData.data.data)
        }
    }, [pastData])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [rating, setRating] = useState(0); // Initial rating is 0

    const handleStarClick = (value) => {
        setRating(value);
    };

    const onClickRateing = () => {
        const payload = {
            bookingId: bookingId,
            star: rating,
            comment: comment,
        }
        dispatch(Addratingbooking(payload))
        handleClose()
    }
    //useEffect(() => {
    //    dispatch(Addratingbooking(2))   
    //}
    //)


    return (
        <>
            <div className="row all_order_box">
                {dataList != null && dataList.map((item) =>
                    <div className='col-md-6'>
                        <div className='card nany_orders my-2'>
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
                                            <p> {item.ratingStar === 0 ? <button type='button' className='rateing-btn' onClick={() => {
                                                setbookingId(item._id)
                                                handleShow();
                                            }}>
                                                Rate This Booking
                                            </button> :
                                                <span className='star'><Star /> {item.ratingStar}.0</span>}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='ordered_persons'>
                                <div className='nanny-small-info mt-2'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex justify-content-center'>
                                            <img src={founder} alt='nanny' className="rounded-circle" />
                                            <div className='d-flex align-items-center'>
                                                <h4>{item.categoryId.name}</h4>
                                                {/*<h6><Star /> 4.5</h6>*/}
                                            </div>
                                        </div>
                                        <div >
                                            <button type='button' className='btn-success-nany'>Completed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            <Modal show={show} onHide={handleClose} className="modal_address change_time chat_modal">
                <Modal.Header closeButton className='rateing-modal-header'>
                    {/*<Modal.Title><img src={nannyicon} alt='nannyicon' /></Modal.Title>*/}
                </Modal.Header>
                <Modal.Body className='rateing_stars'>
                    <div className='nannyicon d-flex '>
                        <img src={nannyicon} alt='nannyicon' />
                    </div>

                    <p>Rate Your last Booking</p>
                    <h5>
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <span
                                    className='rating-star-icon'
                                    key={ratingValue}
                                    onClick={() => handleStarClick(ratingValue)}
                                    style={{ cursor: 'pointer', color: ratingValue <= rating ? 'gold' : 'grey' }}
                                >
                                    &#9733;
                                </span>
                            );
                        })}
                    </h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Review' onChange={(val) => setcomment(val.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='submit_btn-rateing' type='submit' onClick={() => onClickRateing()}>
                        SUBMIT
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PastUser
