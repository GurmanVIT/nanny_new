import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearData } from "../../store/apiSlice/OngoingNannySlice";
import next_btn from "../../assets/img/next_btn.png";
import call_btn from "../../assets/img/call_btn.png";
import { NannyupcommingUserList } from "../../store/apiSlice/NannyUpcomingSlice";
import { UpdateBookingStatus } from "../../store/apiSlice/UpdateBookingStatusSlice";
import { Chat, LocationOn, Send } from "@mui/icons-material";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { io } from "socket.io-client";
import { getchathistory } from "../../store/apiSlice/ChatSlice";

const UpcomingNanny = () => {
  const socket = io("https://dev-api-nanny.virtualittechnology.com/");

  const [skip, setSkip] = useState(0)

  const [isSocketConnected, setSocketConnected] = useState(false);
  const user = useSelector((state) => state.rootReducer.login.data);

  const ongoingData = useSelector(
    (state) => state.rootReducer.NannyupcommingReducer.data
  );
  const updateBookstatus = useSelector(
    (state) => state.rootReducer.UpdateBookingStatusReducer.data
  );

  const chatdata = useSelector((state) => state.chathistoryReducer.data)


  const getChat = (id) => {
    const payload = {
      skip: skip,
      limit: 10,
      id: id
    }
    dispatch(getchathistory(payload));
  }


  const navigate = useNavigate();
  const googlemapClick = () => {

    navigate("/googlemap");
  };

  console.log("updateBookstatus == >".updateBookstatus);

  const [dataList, setDataList] = useState(null);
  useEffect(() => {
    if (user != null && user.status) {
      console.log("Type ===>", user.data.type);
    }
  }, [user]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NannyupcommingUserList(0));
    return () => {
      dispatch(clearData());
    };
  }, [updateBookstatus]);

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
      const data = { userId: user._id };
      socket.emit("touch_server", data);
    }

    socket.on("booking_status_changed", (data) => {
      console.log("Data ===> ", data);
      dispatch(NannyupcommingUserList(0));
    });

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("booking_status_changed");
    };
  }, [isSocketConnected]);

  const updateBookingStatusApi = (statusVal, bookingId) => {
    const payload = {
      bookingId: bookingId,
      status: statusVal,
    };
    console.log("Payload ===> ", payload);
    dispatch(UpdateBookingStatus(payload));
  };

  useEffect(() => {
    console.log("upngoing data ===> ", ongoingData);
    if (ongoingData != null && ongoingData.status === 1) {
      setDataList(ongoingData.data.data);
    }
  }, [ongoingData]);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row all_order_box">
        {dataList != null &&
          dataList.map((item) => (
            <div className="col-md-6">
              <div className="card nany_orders my-2">
                <div className="card.body d-flex">
                  <div className="card.img mr-2">
                    <img
                      src={item.userId.profileImage}
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <div className="card-title">
                      <h6>
                        {item.userId.firstName} {item.userId.lastName}
                      </h6>
                      <p className="text-sm-end text-md-start text-lg-end">
                        ${item.price}
                      </p>
                    </div>

                    <div className="Card.Text">
                      <div className="nanny-info">
                        <div className="location mb-1 d-flex align-items-center">
                          <LocationOn /> <span>{item.address}</span>
                        </div>
                        <p className="time mb-0 text-truncate">
                          {item.date} <span>{item.time}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="upcoming_option mt-3 pt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        {item.status === 1 ||
                          item.status === 2 ||
                          item.status === 3 ? (
                          <Dropdown>
                            <Dropdown.Toggle
                              id="dropdown-basic"
                              className="btn-ongiing"
                            >
                              {item.status === 1
                                ? "Request Accepted"
                                : item.status === 2
                                  ? "On The Way"
                                  : "Reached"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() =>
                                  updateBookingStatusApi(2, item._id)
                                }
                              >
                                On The Way
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  updateBookingStatusApi(3, item._id)
                                }
                              >
                                Reached
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        ) : (
                          <button
                            type="button"
                            className="mb-0 main-button"
                            onClick={() => {
                              item.status === 0
                                ? updateBookingStatusApi(1, item._id)
                                : updateBookingStatusApi(5, item._id);
                            }}
                          >
                            {item.status === 0 ? "Accept Request" : "Canceled"}
                          </button>
                        )}
                      </div>
                      {item.status !== 0 ? (
                        <div>
                          <div className="upcoming_btns d-flex align-items-center">
                            <Button type="button" className="map_btn" onClick={() => googlemapClick()}>
                              <img src={next_btn} alt="logo" />
                            </Button>
                            <Link to="#">
                              <img src={call_btn} alt="logo" />
                            </Link>
                            <Button type="button" onClick={handleShow} className="map_btn"><Chat /></Button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <button
                            type="button"
                            className="mb-0 btn-cancel-nany"
                          >
                            Reject Request
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal show={show} onHide={handleClose} className="modal_address change_time chat_modal">
        <Modal.Header closeButton className="p-2">
          <Modal.Title>
            nanny name
          </Modal.Title>
          {/*<Modal.Title>
            {item.userId.firstName} {item.userId.lastName}
          </Modal.Title>*/}
        </Modal.Header>
        <Modal.Body className="msg_area p-0">
          <div className="show_msg">
            <div className="user_msg">
              <p>Hlo</p>
            </div>
            <div className="nanny_msg">
              <p>Hi</p>
            </div>
          </div>
          <div className="msg_send">
            <input type="text" />
            <button type="button" className="send_btn"><Send /></button>
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
  );
};

export default UpcomingNanny;
