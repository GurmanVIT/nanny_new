import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Dayschange from "./Dayschange";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormCheck } from "react-bootstrap";
import { getTiminglist } from "../../store/apiSlice/GetTimingSlice";
import TimeChangeModal from "./TimeChangeModal";


const Availability = () => {


  const gettiming = useSelector(
    (state) => state.rootReducer.getTiminglistReducer.data
  );
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [dataList, setDataList] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTiminglist(1));
  }, []);
  const updateclick = () => { };

  const [displayStyle, setDisplayStyle] = useState("none");
  const [isChecked, setIsChecked] = useState(false);

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block' based on checkbox state
    setDisplayStyle((prevStyle) => (isChecked ? "none" : "block"));
  };

  const handleCheckboxChange = () => {
    // Update the isChecked state when the checkbox is clicked
    setIsChecked(!isChecked);
    // Toggle the display style based on the new checkbox state
    toggleDisplay();
  };
  const defaultHighlightedDates = [
    new Date(2024, 1, 10),
    new Date(2024, 1, 15)
  ];

  const [highlightedDates, setHighlightedDates] = useState(defaultHighlightedDates);

  const tileClassName = ({ date }) => {
    // Check if the date is one of the default highlighted dates
    const isDefaultHighlighted = defaultHighlightedDates.some(
      defaultHighlightedDate => defaultHighlightedDate.toDateString() === date.toDateString()
    );
    // Check if the date is one of the user-modifiable highlighted dates
    const isHighlighted = highlightedDates.some(
      highlightedDate => highlightedDate.toDateString() === date.toDateString()
    );

    // Return the class name based on whether the date should be highlighted or not
    return isDefaultHighlighted || isHighlighted ? 'highlighted-date' : null;
  };

  const handleCalendarClick = (date) => {
    // Check if the clicked date is one of the default highlighted dates
    const isDefaultHighlighted = defaultHighlightedDates.some(
      defaultHighlightedDate => defaultHighlightedDate.toDateString() === date.toDateString()
    );

    // If the clicked date is not one of the default highlighted dates,
    // update the highlighted dates array with the new date
    if (!isDefaultHighlighted) {
      setHighlightedDates([date]);
    }
  };

  // Create an array with numbers from 1 to 24
  const numbersArray = Array.from({ length: 24 }, (_, index) => index + 1);

  // Function to handle button click
  const handleButtonClick = (number) => {
    // Check if the button is already selected
    const isButtonSelected = selectedButtons.includes(number);

    // Update the selectedButtons state based on the click
    if (isButtonSelected) {
      // If already selected, remove from the array
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((selected) => selected !== number)
      );
    } else {
      // If not selected, add to the array
      setSelectedButtons((prevSelected) => [...prevSelected, number]);
    }
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
                <Tab>Time</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="mt-3">
                <div className="updates">
                  <button
                    type="button"
                    className="update_btn"
                  >
                    Update
                  </button>
                </div>
                <Calendar
                  tileClassName={tileClassName}
                  onClickDay={handleCalendarClick}
                />
                <div>
                  <div className="d-flex justify-content-center selectedates mt-3">
                    <p>23/12/2024</p>
                    <Form>
                      <FormCheck
                        type="switch"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
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
                              backgroundColor: selectedButtons.includes(number)
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
            <TabPanel>
              <TimeChangeModal />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Availability;
