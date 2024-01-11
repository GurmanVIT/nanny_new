import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Addhours from './Addhours';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbooknAsync } from '../../store/apiSlice/BooknannySlice';

const CustomModal = ({ isOpen, onRequestClose  }) => {

  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.bookNanny.data);


  console.log("Book Nanny ===>",data)
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

//useEffect(()=>{

//  if(data!=null&&data.status==1){
//      onRequestClose(data);
//  }

//},[data])


  const [address, setaddress] = useState('');
  const [date,setdate] = useState('');
  const [time , settime] = useState('');
  const [price , setprice] = useState('');

  



  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
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
            <Form.Group controlId="duedate">
              <Form.Control type="date" name="duedate" placeholder="Due date" value={date} onChange={(e) => setdate(e.target.value)}/>
            </Form.Group>
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
            <input type='text' placeholder='Add Hours' defaultValue="2 hours" />
            <Link onClick={openSecondModal}>
              <LocalHospitalIcon />
            </Link>
            {isSecondModalOpen && (
        <Addhours isOpen={isSecondModalOpen} onRequestClose={() => setSecondModalOpen(false)} />
      )}
          </form>
          <div className='btn_modal'>
            <Link to="/bookdetails" onClick={()=>onRequestClose()}>CONTINUE</Link>

          </div>

        </div>
      </Modal>

  );
};

export default CustomModal;