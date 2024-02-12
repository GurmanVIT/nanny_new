import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchbooknAsync } from '../../store/apiSlice/BooknannySlice';
import { Add, AddLocation, Remove } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";


const Card = ({ name, image, length, }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const navigateToAnotherScreen = () => {
        navigate('/nanyList');
    }


    const [isSecondModalOpen, setSecondModalOpen] = useState(false);

    const openSecondModal = () => {
        setSecondModalOpen(true);
    };

    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.bookNanny.data);

    const [address, setaddress] = useState('');
    const [date, setdate] = useState('');
    const [time, settime] = useState('');
    const [price, setprice] = useState('');
    const [childAge, setChildAge] = useState('');
    const [childName, setChildName] = useState('');


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
        } catch (error) {
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

    const [counter, setCounter] = useState(1);

    const handleincremented = () => {

        setCounter(counter + 1);
    };
    const handledecremented = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };




    const handleNextPageClick = () => {

        if (address.trim() !== '' && date.trim() !== '' && childAge.trim() !== '' && childName.trim() !== '') {
            navigateToAnotherScreen()
        } else {
            alert("Please fill all fields !")
        }

    };

    //const handlechildern = () => {

    //    try{
    //    documents.forEach((element,index) => {
    //        if(element.link.length===0&&element.name.length===0)
    //        {
    //            setFilled(true)
    //            throw new Error('BreakException');
    //        }
    //        else if(index===documents.length-1){
    //            setFilled(false)
    //        }
    //    });

    //    if(!isFilled){
    //        const payload ={
    //            "documents": documents
    //        } 
    //        console.log(payload)
    //        dispatch(uploadDocuments(payload));
    //        // Handle success, e.g., navigate to another screen    
    //    }
    //    else{
    //        alert("Please add all documents and its name!")
    //    }
    //}catch (e) {
    //    alert("Please add all documents and its name!")
    //    if (e.message !== 'BreakException') throw e;
    //  }
    //};


    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className='nannay_cat_main d-block shadow bg-body rounded overflow-hidden'>
                <Link onClick={handleShow}>
                    <div className="category_image">
                        <img src="https://picsum.photos/200" className="w-100" alt={name} />
                    </div>
                    <div className="px-2 pt-2 categoty_heading w-100 d-flex justify-content-between align-items-center">
                        <h6 className="m-0">{name}</h6>
                        <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                    </div>
                </Link>
            </div>
            <Modal show={show} onHide={handleClose} className='add_detalis'>
                <Modal.Header closeButton>
                    <Modal.Title>ADD DETAILS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-100 mb-2 form_eyes">
                        <label>Location</label>
                        <input type='text' placeholder='location' value={address} onChange={(e) => setaddress(e.target.value)} />
                        <AddLocation />
                    </form>
                    <Form className='mb-2'>
                        <Form.Label className='mb-0'>Date</Form.Label>
                        <input type="date" name="duedate" placeholder="Due date" value={date} onChange={(e) => setdate(e.target.value)} />
                    </Form>
                    <Form className='mb-2'>
                        <Form.Label className='mb-0'>Time</Form.Label>
                        <div className='timepicker_card'>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale={"en"}
                                ampm={false}
                                value={time}
                                onChange={(e) => settime(e.target.value)}
                            >
                                <TimePicker />
                            </LocalizationProvider>
                        </div>
                    </Form>
                    {/*<Form className='mb-2'>
                        <Form.Label>Time</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>6:00 pm</option>
                            <option value="1">5:00 pm</option>
                            <option value="2">7:00 pm</option>
                            <option value="3">8:00 pm</option>
                        </Form.Select>
                    </Form>*/}
                    <form className="w-100 mb-2 form_eyes">
                        <label>Number of Hours</label>
                        <input value={counter} />


                        <Link onClick={handleincremented} >
                            <Add className='incremented' />
                        </Link>
                        <Link onClick={handledecremented} className='decremented'>
                            <Remove
                            />
                        </Link>
                    </form>
                    <form>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <label>Childern Detail</label>
                                <Link className='me-1' onClick={addDiv}><Add className='addicon' /></Link>
                            </div>
                            <div>
                                <input type='text' placeholder='Name' className='my-2 w-100' value={childName}
                                    onChange={(e) => setChildName(e.target.value)} />
                                <input type='Number' placeholder='Age' className='my-2 w-100' value={childAge}
                                    onChange={(e) => setChildAge(e.target.value)} />
                            </div>
                        </div>
                    </form>
                    <div>
                        {divs.map((div, index) => (
                            <div key={div.id} className="added-div">
                                <div className='d-flex justify-content-between'>
                                    Childern {index + 1}
                                    <Link onClick={removeDiv}><Remove /></Link>
                                </div>
                                <div>
                                    <form>
                                        <input type='text' placeholder='Name' className='my-2 w-100' value={childName}
                                            onChange={(e) => setChildName(e.target.value)} />
                                        <input type='Number' placeholder='Age' className='my-2 w-100' value={childAge}
                                            onChange={(e) => setChildAge(e.target.value)} />
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer className='btn_modal mt-0'>
                    <Button onClick={() => handleNextPageClick()}>
                        CONTINUE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>


    )
}

export default Card
