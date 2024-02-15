import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearData } from "../../store/apiSlice/OngoingNannySlice";
import next_btn from "../../assets/img/next_btn.png";
import call_btn from "../../assets/img/call_btn.png";
import { NannyupcommingUserList } from "../../store/apiSlice/NannyUpcomingSlice";
import { UpdateBookingStatus } from "../../store/apiSlice/UpdateBookingStatusSlice";
import { LocationOn } from "@mui/icons-material";
import { Dropdown } from "react-bootstrap";
import { io } from "socket.io-client";

const UpcomingNanny = () => {
  const socket = io("https://dev-api-nanny.virtualittechnology.com/");

  const [isSocketConnected, setSocketConnected] = useState(false);
  const user = useSelector((state) => state.rootReducer.login.data);

  const ongoingData = useSelector(
    (state) => state.rootReducer.NannyupcommingReducer.data
  );
  const updateBookstatus = useSelector(
    (state) => state.rootReducer.UpdateBookingStatusReducer.data
  );

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

  const onAcceptClick = () => {};

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
                            <Link to="#">
                              <img src={next_btn} alt="logo" />
                            </Link>
                            <Link to="#">
                              <img src={call_btn} alt="logo" />
                            </Link>
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
    </>
  );
};

export default UpcomingNanny;
