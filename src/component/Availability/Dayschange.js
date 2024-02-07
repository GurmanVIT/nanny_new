import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import TimeChangeModal from "./TimeChangeModal";
import { DeleteForever, SaveAs } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getTiminglist } from "../../store/apiSlice/GetTimingSlice";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider, huHU } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  clearData,
  updateTimingslist,
} from "../../store/apiSlice/UpdateTimingsSlice";

const Dayschange = () => {
  const numbersArray = Array.from({ length: 24 }, (_, index) =>
    index + 1 < 10 ? "0" + (index + 1) : index + 1
  );
  const mintArray = Array.from({ length: 60 }, (_, index) =>
    index + 1 < 10 ? "0" + (index + 1) : index + 1
  );

  const [newTime, setNewTime] = useState("");
  const [period, setPeriod] = useState("");
  const [show, setShow] = useState(false);
  const [Timechange, setTimechange] = useState("");
  const [daysData, setDaysData] = useState(null);
  const [selectedBox, setSelectedBox] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getDays = useSelector(
    (state) => state.rootReducer.getTiminglistReducer.data
  );
  const updateDataReducer = useSelector(
    (state) => state.rootReducer.updateTimingslistReducer.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTiminglist(2));
  }, []);

  useEffect(() => {
    if (getDays != null && getDays.status === 1) {
      setDaysData(getDays.data.data);
    }
  }, [getDays]);

  const handleToggleActive = (index, val) => {
    console.log("Active Val ===>", val);
    setDaysData((daysData) => {
      const updatedDaysData = [...daysData];
      const updatedDay = {
        ...updatedDaysData[index],
        isFullDayAvialable: val ? 1 : 0,
      };
      updatedDaysData[index] = updatedDay;
      return updatedDaysData;
    });
  };

  const handleTime = () => {
    const timeArray =
      daysData[selectedIndex].timeSlotsAvailablity[0].split(",");
    const newValue =
      selectedBox === 0
        ? [newTime + "," + timeArray[1]]
        : [timeArray[0] + "," + newTime];
    setDaysData((daysData) => {
      const updatedDaysData = [...daysData];
      const updatedDay = {
        ...updatedDaysData[selectedIndex],
        timeSlotsAvailablity: newValue,
      };
      updatedDaysData[selectedIndex] = updatedDay;
      return updatedDaysData;
    });
    handleClose();
  };

  const selectTime = (index, box) => {
    setSelectedBox(box);
    setSelectedIndex(index);
    handleShow();
  };

  const [selectedItem, setSelectedItem] = useState("Dropdown");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const updatedDays = () => {
    const payloadData = daysData.map((item) => {
      // Extract relevant properties
      const { date, day, timeSlotsAvailablity, isFullDayAvialable } = item;

      // Transform timeSlotsAvailablity format
      const transformedTimeSlots = timeSlotsAvailablity
        .map((slot) => {
          const [start, end] = slot.split(",");
          return `${start.trim()}, ${end.trim()}`;
        })
        .join(", ");

      // Create new transformed object
      return {
        date,
        day,
        timeSlotsAvailablity: transformedTimeSlots,
        isFullDayAvialable,
      };
    });
    console.log("Payload ===>", payloadData);
    const payload = {
      timings: payloadData,
    };
    dispatch(updateTimingslist(payload));
  };

  useEffect(() => {
    if (updateDataReducer != null && updateDataReducer.status === 1) {
      alert("Data updated");
      dispatch(clearData());
    }
  }, [updateDataReducer]);

  return (
    <div className="change_day_time">
      <div className="updates">
        <button
          type="button"
          className="update_btn"
          onClick={() => updatedDays()}
        >
          Update
        </button>
      </div>
      <div className="mt-4">
        <h6>Select Desired Day</h6>
      </div>
      <Table>
        <thead>
          <tr>
            <th colSpan={2} className="text-center">
              Day
            </th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        {daysData != null &&
          daysData.map((item, index) => (
            <tbody>
              <tr>
                <td>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={item.isFullDayAvialable === 1 ? true : false}
                      onChange={(val) =>
                        handleToggleActive(index, val.target.checked)
                      }
                    />
                  </Form>
                </td>
                <td>
                  {item.day == 0
                    ? "Sunday"
                    : item.day == 1
                      ? "Monday"
                      : item.day == 2
                        ? "Tuesday"
                        : item.day == 3
                          ? "Wednesday"
                          : item.day == 4
                            ? "Thursday"
                            : item.day == 5
                              ? "Friday"
                              : "Saturday"}
                </td>
                <td>
                  <Button onClick={() => selectTime(index, 0)}>
                    {item.timeSlotsAvailablity[0].split(",")[0]}
                  </Button>
                </td>
                <td>
                  <Button onClick={() => selectTime(index, 1)}>
                    {item.timeSlotsAvailablity[0].split(",")[1]}
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>

      {/*<div className="updates">
        <button
          type="button"
          className="update_btn"
          onClick={() => updatedDays()}
        >
          Update
        </button>
      </div>*/}

      <Modal
        show={show}
        onHide={handleClose}
        className="modal_address change_time"
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Time</Modal.Title>
        </Modal.Header>
        <Modal.Body className="time_change_input">
          <div className="time_select">
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={"en"}
            >
              <TimePicker
                ampm={false}
                onChange={(e) => {
                  const hour =
                    e.hour().toString().length === 1
                      ? "0" + e.hour()
                      : e.hour();
                  const minute =
                    e.minute().toString().length === 1
                      ? "0" + e.minute()
                      : e.minute();

                  setNewTime(hour + ":" + minute);
                  console.log(hour + ":" + minute);
                }}
              />
            </LocalizationProvider>
          </div>

          <button onClick={() => handleTime()} className="apply_btn">
            Apply
          </button>
          {/*<input type="time" className='input_time'  value={newTime} onChange={(e) => setNewTime(e.target.value)} />*/}

          {/*<input type="time" className='input_time' value={Timechange} onChange={(e) => setTimechange(e.target.value)} />*/}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dayschange;
