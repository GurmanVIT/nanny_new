import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Dayschange from './Dayschange'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormCheck } from 'react-bootstrap'
import { getTiminglist } from '../../store/apiSlice/GetTimingSlice'

const Availability = () => {

  const gettiming = useSelector((state) => state.rootReducer.getTiminglistReducer.data)

  const [dataList, setDataList] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTiminglist(0))
  }, [])

  const [displayStyle, setDisplayStyle] = useState('none');
  const [isChecked, setIsChecked] = useState(false);

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block' based on checkbox state
    setDisplayStyle((prevStyle) => (isChecked ?  'none' : 'block'));
  };

  const handleCheckboxChange = () => {
    // Update the isChecked state when the checkbox is clicked
    setIsChecked(!isChecked);
    // Toggle the display style based on the new checkbox state
    toggleDisplay();
  };



  const [selectedDate, setSelectedDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState([
    new Date(2024, 1, 29),
  ]);

  const onChange = (date) => {
    setSelectedDate(date);
  };

  const tileContent = ({ date }) => (
    <div>
      <p>{date.getDate()}</p>
      {/* Add your custom content for each tile */}
    </div>
  );

  const tileClassName = ({ date }) => {
    const dateToCheck = date.getTime();
    if (highlightedDates.some(highlightedDate => highlightedDate.getTime() === dateToCheck)) {
      return 'highlighted-date';
    }
    return '';
  };

  const onClickDay = (date) => {
    const dateToToggle = date.getTime();
    if (highlightedDates.some(highlightedDate => highlightedDate.getTime() === dateToToggle)) {
      setHighlightedDates(prevDates => prevDates.filter(prevDate => prevDate.getTime() !== dateToToggle));
    } else {
      setHighlightedDates(prevDates => [...prevDates, date]);
    }
  };


  return (
    <>
      <div className="order_card mb-5 calender">
        <div>
          <Tabs>
            <TabList>
              <Tab>CALENDER</Tab>
              <Tab>DAYS</Tab>
            </TabList>
            <TabPanel>
              <div className='mt-3'>
                <Calendar style={{ height: 500 }}
                  onChange={onChange}
                  value={selectedDate}
                  tileContent={tileContent}
                  tileClassName={tileClassName}
                  onClickDay={onClickDay} />
                <div>
                  <div className='d-flex justify-content-center selectedates mt-3'>
                    <p>23/12/2024</p>
                    <Form>
                      <FormCheck type="switch"
                       checked={isChecked} onChange={handleCheckboxChange} />
                    </Form>
                    <p>By hour</p>
                  </div>
                  <div style={{ display: displayStyle }}>
                  <div className='btn_hours mt-3'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                    <button>11</button>
                    <button>12</button>
                  </div>
                  <div className='btn_hours mt-3'>
                    <button>13</button>
                    <button>14</button>
                    <button>15</button>
                    <button>16</button>
                    <button>17</button>
                    <button>18</button>
                    <button>19</button>
                    <button>20</button>
                    <button>21</button>
                    <button>22</button>
                    <button>23</button>
                    <button>24</button>
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
    </div >
    </>
  )
}

export default Availability
