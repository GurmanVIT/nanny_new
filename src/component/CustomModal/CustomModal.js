import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcon from '@mui/icons-material/Add';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Addhours from './Addhours';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbooknAsync } from '../../store/apiSlice/BooknannySlice';

const CustomModal = ({ isOpen, onRequestClose, length }) => {

  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.bookNanny.data);


  console.log("Book Nanny ===>", data)
  const handlebook = () => {

    const payload = {
      address: address,
      date: date,
      time: time,
      price: price,
    }

    try {
      dispatch(fetchbooknAsync(payload));
      // Handle success, e.g., navigate to another screen
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('signup failed:', error);
    }
  };

  const [divArray, setDivArray] = useState(Array.from({ length }, (_, index) => index + 1));

  const handleRemove = (indexToRemove) => {
    const updatedArray = divArray.filter((_, index) => index !== indexToRemove);
    setDivArray(updatedArray);
  };

  const [divs, setDivs] = useState([]);
  const addDiv = () => {
    setDivs([...divs, { id: divs.length + 1 }]);
  };
  const removeDiv = () => {
    if (divs.length > 0) {
      setDivs(divs.slice(0, divs.length - 1));
    }
  };

  const [counter, setCounter] = useState(0);

  const handleincremented = () => {

    setCounter(counter + 1);
  };
  const handledecremented = () => {

    setCounter(counter - 1);
  };






  //useEffect(()=>{

  //  if(data!=null&&data.status==1){
  //      onRequestClose(data);
  //  }

  //},[data])


  const [address, setaddress] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [price, setprice] = useState('');





  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}  >
      {/*classNames={{
      modalAnimationIn: "customEnterModalAnimation",
      modalAnimationOut: "customLeaveModalAnimation",
    }}*/}
      <div className='add_details'>
        <div className='heading d-flex justify-content-center'>
          <h4>ADD DETAILS</h4>
        </div>
        <form className="w-100 mb-2 form_eyes">
          <label>Location</label>
          <input type='text' placeholder='location' value={address} onChange={(e) => setaddress(e.target.value)} />
          <AddLocationIcon />
        </form>
        <Form className='mb-2'>
          <Form.Label className='mb-0'>Date</Form.Label>
          <input type="date" name="duedate" placeholder="Due date" />
        </Form>
        <Form className='mb-2'>
          <Form.Label>Time</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>6:00 pm</option>
            <option value="1">5:00 pm</option>
            <option value="2">7:00 pm</option>
            <option value="3">8:00 pm</option>
          </Form.Select>
        </Form>
        <form className="w-100 mb-2 form_eyes">
          <label>Number of Hours</label>
          <input value={counter} />


          <Link onClick={handleincremented} >
            <AddIcon className='incremented' />
          </Link>
          <Link onClick={handledecremented} className='decremented'>
            <RemoveIcon />
          </Link>



          {isSecondModalOpen && (
            <Addhours isOpen={isSecondModalOpen} onRequestClose={() => setSecondModalOpen(false)} />
          )}
        </form>
        <form>
          <div>
            <div className='d-flex justify-content-between'>
              <label>Childern Detail</label>
              <Link className='me-1' onClick={addDiv}><AddIcon className='addicon' /></Link>
            </div>
            <div>
              <input type='text' placeholder='Name' className='my-2 w-100' />
              <input type='Number' placeholder='Age' className='my-2 w-100' />
            </div>
          </div>
        </form>
        <div>
          {divs.map((div, index) => (
            <div key={div.id} className="added-div">
              <div className='d-flex justify-content-between'>
                Childern {index + 1}
                <Link onClick={removeDiv}><RemoveIcon /></Link>
              </div>
              <div>
                <form>
                  <input type='text' placeholder='Name' className='my-2 w-100' />
                  <input type='Number' placeholder='Age' className='my-2 w-100' />
                </form>
              </div>
            </div>
          ))}
        </div>
        <div className='btn_modal'>
          <Link to="/nanyList" onClick={() => onRequestClose()}>CONTINUE</Link>
        </div>
      </div>
    </Modal>

  );
};

export default CustomModal;