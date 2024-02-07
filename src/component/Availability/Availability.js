import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Dayschange from "./Dayschange";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormCheck } from "react-bootstrap";
import { getTiminglist } from "../../store/apiSlice/GetTimingSlice";
import TimeChangeModal from "./TimeChangeModal";

const Availability = () => {
  const getTiming = useSelector(
    (state) => state.rootReducer.getTiminglistReducer.data
  );
  const [selectedTiming, setSelectedTiming] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedTimeArray, setSelectedTimeArray] = useState([]);

  const [dataList, setDataList] = useState(null);
  const [defaultHighlightedDates, setDefaultHighlightedDates] = useState([]);

  const [highlightedDates, setHighlightedDates] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTiminglist(1));
  }, []);

  useEffect(() => {
    if (getTiming != null && getTiming.status === 1) {
      setSelectedTiming(getTiming.data.data);
    }
  }, [getTiming]);

  // Swap day and month and create a new date string
  const swappedDateString = (originalDate) => {
    const currentDateArr = originalDate.split("/");
    return (
      currentDateArr[1] + "/" + currentDateArr[0] + "/" + currentDateArr[2]
    );
  };

  const updateclick = () => { };

  const [displayStyle, setDisplayStyle] = useState("none");
  const [isChecked, setIsChecked] = useState(false);

  // const toggleDisplay = () => {
  //   setDisplayStyle((prevStyle) => (isChecked ? "none" : "block"));
  // };

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  //   toggleDisplay();
  // };

  // celender selection setup

  useEffect(() => {
    console.log("Selected Timing ===> ", selectedTiming);
  }, [selectedTiming]);

  useEffect(() => {
    const combineArray = selectedTimeArray.join(",");
    setSelectedTiming((selectedTiming) => {
      const updatedSelectedData = [...selectedTiming];
      const updatedTiming = {
        ...updatedSelectedData[selectedIndex],
        timeSlotsAvailablity: combineArray,
      };
      updatedSelectedData[selectedIndex] = updatedTiming;
      return updatedSelectedData;
    });
  }, [selectedTimeArray]);

  const tileClassName = ({ date }) => {
    if (selectedTiming != null) {
      const isDefaultHighlighted = selectedTiming.some(
        (defaultHighlightedDate) =>
          new Date(
            swappedDateString(defaultHighlightedDate.date)
          ).toDateString() === date.toDateString()
      );
      const isHighlighted = highlightedDates.some(
        (highlightedDate) =>
          highlightedDate.toDateString() === date.toDateString()
      );
      if (isDefaultHighlighted) {
        return "default-highlighted-date";
      }
      if (isHighlighted) {
        return "highlighted-date";
      }
    }
    // return isDefaultHighlighted || isHighlighted ? "highlighted-date" : null;
  };

  const handleCalendarClick = (date) => {
    console.log("Date ===> ", date.toDateString());
    const isDefaultHighlighted = highlightedDates.some(
      (defaultHighlightedDate) =>
        defaultHighlightedDate.toDateString() === date.toDateString()
    );

    const index = () => {
      for (let i = 0; i < selectedTiming.length; i++) {
        if (
          new Date(swappedDateString(selectedTiming[i].date)).toDateString() ===
          date.toDateString()
        ) {
          setSelectedIndex(i);
          return i;
        }
      }
      setSelectedIndex(-1);
      return -1;
    };

    if (index() > -1) {
      // console.log(selectedTiming[index()].isFullDayAvialable);
      const selectedDateData = selectedTiming[index()];

      if (selectedDateData.isFullDayAvialable === 0) {
        setIsChecked(true);
        setDisplayStyle("block");
        setSelectedTimeArray(
          selectedDateData.timeSlotsAvailablity[0].split(",")
        );
      } else {
        setIsChecked(false);
        setDisplayStyle("none");
        setSelectedTimeArray([]);
      }
    } else {
      setIsChecked(false);
      setDisplayStyle("none");
      setSelectedTimeArray([]);
    }

    if (!isDefaultHighlighted) {
      setHighlightedDates([date]);
      const dateObject = new Date(date);

      // Options for formatting the date
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };

      // Convert the Date object to the desired format
      const formattedDate = dateObject.toLocaleDateString("en-GB", options);
      const newObject = {
        isFullDayAvialable: 1,
        date: formattedDate,
        day: "",
        timeSlotsAvailablity: ["10:00,11:00,12:00,13:00,14:00,15:00,16:00"],
        isActive: 1,
        isDeleted: 0,
        _id: "newObjectId", // You can generate a new unique ID
        nannyId: "newNannyId",
        createdAt: "2024-02-11T00:00:00.000Z",
        __v: 0,
      };

      setSelectedTiming((prevData) => [...prevData, newObject]);
    }
  };

  //24 Bottom button selection
  const numbersArray = Array.from({ length: 24 }, (_, index) => index + 1);
  const handleButtonClick = (number) => {
    const val =
      number.toString().length === 1
        ? "0" + number + ":" + "00"
        : "" + number + ":" + "00";
    const isButtonSelected = selectedTimeArray.includes(val);
    if (isButtonSelected) {
      setSelectedTimeArray((prevSelected) =>
        prevSelected.filter((selected) => selected !== val)
      );
    } else {
      setSelectedTimeArray((prevSelected) => [...prevSelected, val]);
    }
  };

  const isTimeIncluded = (value) => {
    const val =
      value.toString().length === 1
        ? "0" + value + ":" + "00"
        : "" + value + ":" + "00";
    return selectedTimeArray.includes(val);
  };

  return (
    <>
      <div className="order_card mb-5 calender">
        <div>
          <Tabs>
            <div className="d-flex justify-content-between">
              <TabList>
                <Tab>CALENDER</Tab>
                <Tab>DAYS</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="mt-3">
                <div className="updates">
                  <button type="button" className="update_btn">
                    Update
                  </button>
                </div>
                <Calendar
                  tileClassName={tileClassName}
                  onClickDay={(date) => handleCalendarClick(date)}
                  formatLongDate={(date) => {
                    const options = {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    };
                    const formattedDate = new Intl.DateTimeFormat(
                      "en-IN",
                      options
                    ).format(date);

                    // Extract individual components and join them with commas
                    const [day, month, year] = formattedDate.split("/");
                    return `${day},${month},${year}`;
                  }}
                />
                <div>
                  <div className="d-flex justify-content-center selectedates mt-3">
                    <p>23/12/2024</p>
                    <Form>
                      <FormCheck
                        type="switch"
                        checked={isChecked}
                        onChange={(val) => {
                          setIsChecked(val.target.checked);
                          setDisplayStyle(
                            val.target.checked ? "block" : "none"
                          );
                        }}
                      />
                    </Form>
                    <p>By hour</p>
                  </div>
                  <div style={{ display: displayStyle }}>
                    <div className="btn_hours mt-3 row coustom_container">
                      {/* Map over the array to render buttons */}
                      {numbersArray.map((number) => (
                        <div className="col-1 btn_number text-center">
                          <button
                            key={number}
                            onClick={() => handleButtonClick(number)}
                            style={{
                              backgroundColor: isTimeIncluded(number)
                                ? "#6EC1E4"
                                : "rgb(235 234 234)",
                            }}
                          >
                            {number}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <Dayschange />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Availability;
