import React, { useEffect, useState } from 'react';
import next_btn from '../../assets/img/next_btn.png';
import call_btn from '../../assets/img/call_btn.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, upcommingUserList } from '../../store/apiSlice/UpcommingSlice';
import { Chat, Send } from '@mui/icons-material';
import { Button, Modal } from 'react-bootstrap';
import { io } from 'socket.io-client';
import { clearChat, getChatHistory } from "../../store/apiSlice/ChatSlice";
import moment from 'moment';
import nannyicon from '../../assets/img/nany_icon.png';

const UpcomingUser = () => {
    const socket = io("https://dev-api-nanny.virtualittechnology.com/");

    const [skip, setSkip] = useState(0);
    const [message, setMessage] = useState("");
    const [time, setTime] = useState("");

    const userId = localStorage.getItem("userId");
    const type = localStorage.getItem("type");

    const [chatIndex, setChatIndex] = useState(0);
    const [myChatData, setChatData] = useState([]);

    const [isSocketConnected, setSocketConnected] = useState(false);
    const currentDate = new Date(); // Get the current date and time
    const options = { timeZone: 'Asia/Kolkata' }; // India time zone
    const formattedDate = currentDate.toLocaleString('en-IN', options); // Format the date and time for India


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const user = useSelector((state) => state.rootReducer.login.data);

    const upcommingData = useSelector((state) => state.rootReducer.upcommingReducer.data)
    const profileData = useSelector(
        (state) => state.rootReducer.UserProfileReducer.data
    );
    const [dataList, setDataList] = useState(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(upcommingUserList(0))

        return () => {
            dispatch(clearData())
        }
    }, [])

    useEffect(() => {
        console.log("upcommingData data ===> ", upcommingData)
        if (upcommingData != null && upcommingData.status === 1) {
            setDataList(upcommingData.data.data)
        }
    }, [upcommingData])

    const chatData = useSelector(
        (state) => state.rootReducer.chatHistoryReducer.data
    );

    const getChat = (id) => {
        const payload = {
            skip: skip,
            limit: 10,
            id: id,
        };
        console.log("Payload chat ===> ", payload);
        dispatch(getChatHistory(payload));
    };

    //useEffect(() => {
    //  if (user != null && user.status) {
    //    console.log("Type ===>", user.data.type);
    //  }
    //}, [user]);

    useEffect(() => {
        console.log("Hello");
        function onConnect() {
            console.log("Is Socket Conneted ===> ", isSocketConnected);
            setSocketConnected(true);
        }

        function onDisconnect() {
            setSocketConnected(false);
        }

        if (!isSocketConnected && user != null) {
            const data = { userId: userId };
            socket.emit("touch_server", data);
        }

        socket.on("booking_status_changed", (data) => {
            dispatch(upcommingUserList(0));
        });

        socket.on("receive_message", (data) => {
            console.log("ReceiveMessage ===> ", data);
            setChatData((myChatData) => [...myChatData, data]);
        });

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("booking_status_changed");
            dispatch(clearChat());
        };
    }, [isSocketConnected]);

    const openChat = (id, index) => {
        getChat(id);
        setChatIndex(index);
    };

    useEffect(() => {
        console.log("Chat Data ===> ", chatData);
        if (chatData != null && chatData.status === 1) {
            setShow(true);
        }
    }, [chatData]);

    const sendMessage = () => {
        console.log("df");
        if (type === 1) {
            const msg = {
                message: message,
                sentBy: 1,
                type: 1,
                _id: "",
                senderId: {
                    firstName: profileData.data.firstName,
                    lastName: profileData.data.lastName,
                    profileImage: profileData.data._id,
                    _id: userId,
                },
                receiverId: {
                    firstName: dataList[chatIndex].nannyDetails.firstName,
                    lastName: dataList[chatIndex].nannyDetails.lastName,
                    profileImage: dataList[chatIndex].nannyDetails.profileImage,
                    _id: dataList[chatIndex].nannyDetails._id,
                },
                createdAt: formattedDate,
            };

            setChatData((myChatData) => [...myChatData, msg]);
            const msgData = {
                bookingId: dataList[chatIndex]._id,
                userId: userId,
                otherUserId: dataList[chatIndex].nannyDetails._id,
                message: message,
            };
            socket.emit("send_message", msgData);
        } else {
            const msg = {
                message: message,
                sentBy: 1,
                type: 1,
                _id: "",
                senderId: {
                    firstName: profileData.data.firstName,
                    lastName: profileData.data.lastName,
                    profileImage: profileData.data._id,
                    _id: userId,
                },
                receiverId: {
                    firstName: dataList[chatIndex].userId.firstName,
                    lastName: dataList[chatIndex].userId.lastName,
                    profileImage: dataList[chatIndex].userId.profileImage,
                    _id: dataList[chatIndex].userId._id,
                },
                createdAt: formattedDate,
            };

            setChatData((myChatData) => [...myChatData, msg]);

            const msgData = {
                bookingId: dataList[chatIndex]._id,
                userId: userId,
                otherUserId: dataList[chatIndex].userId._id,
                message: message,
                createdAt: formattedDate,
            };

            console.log("Message Data ===> ", msgData);
            socket.emit("send_message", msgData);
        }
        setMessage("");
        // getChat(dataList[chatIndex]._id);
    };

    const getFormattedDateTime = (utcDate) => {
        const timestampStr = new Date(utcDate);
        const options = {
            timeZone: "Asia/Kolkata",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false, // Use 24-hour format
        };
        const formattedDate = timestampStr.toLocaleDateString("en-IN", options);
        const dateData = formattedDate.split(" ");
        const createdTime = moment(dateData[1], "HH:mm:ss").add(5, "hours").add(30, "minutes");
        const finalDate = dateData[0] + " " + createdTime.format("HH:mm:ss");
        return finalDate;
    };

    return (
        <>
            <div className="row all_order_box">

                {dataList != null && dataList.map((item, index) =>
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
                                            <div className="location mb-1 d-flex align-items-baseline"><i className=" fa fa-location me-1"></i><span>{item.address}</span></div>
                                            <p className="time mb-0 text-truncate">{item.date} <span>{item.time}</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='upcoming_option mt-2 pt-2'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div >
                                            <Link to="#" className='mb-0'>{item.status === 0 ? "Cancel Booking" : item.status === 1 ? "Request Accepted" : "On The Way"}</Link>
                                        </div>
                                        <div>
                                            <div className="upcoming_btns d-flex align-items-center">
                                                <Link to="#"><img src={next_btn} alt="logo" /></Link>
                                                <Link to="#"><img src={call_btn} alt="logo" /></Link>
                                                <Button
                                                    type="button"
                                                    onClick={() => openChat(item._id, index)}
                                                    className="map_btn"
                                                >
                                                    <Chat />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}


            </div>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
                className="modal_address change_time chat_modal"
            >
                <Modal.Header closeButton className="p-2">
                    <Modal.Title className="chat_heading"><img src={nannyicon} alt="icon" /></Modal.Title>
                    {/*<Modal.Title>
            {item.userId.firstName} {item.userId.lastName}
          </Modal.Title>*/}
                </Modal.Header>
                <Modal.Body className="msg_area p-0">
                    <ul className="show_msg">
                        {chatData != null &&
                            chatData.data.map((item, index) => (
                                <li>
                                    {item.receiverId._id === userId ? (
                                        <div className="mt-3">
                                            <div className="user_msg">
                                                <div className='msg'>
                                                    <div>
                                                        <div>
                                                            <span className="times sender_name">
                                                                {item.senderId.firstName} {item.senderId.lastName}
                                                            </span>
                                                        </div>
                                                        <span className="mt-1 msg_text">{item.message}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="times">{getFormattedDateTime(item.createdAt)}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mt-3">

                                            <div className="nanny_msg">
                                                <div className='msg'>
                                                    <div>
                                                        <div>
                                                            <span className="times sender_name">
                                                                {item.senderId.firstName} {item.senderId.lastName}
                                                            </span>
                                                        </div>
                                                        <span className="mt-1 msg_text">{item.message}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="time">{getFormattedDateTime(item.createdAt)}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                    </ul>
                    <div className="msg_send">
                        <input
                            type="text"
                            value={message}
                            onChange={(val) => setMessage(val.target.value)}
                        />
                        <button
                            type="button"
                            className="send_btn"
                            onClick={() => sendMessage()}
                        >
                            <Send />
                        </button>
                    </div>
                </Modal.Body>
                {/*<Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>*/}
            </Modal>
        </>
    )
}

export default UpcomingUser