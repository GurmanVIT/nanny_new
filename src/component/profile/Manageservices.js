import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, ToggleButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategorieslist } from '../../store/apiSlice/ManageservicesSlice';

const Manageservices = () => {
    const getAllCategories = useSelector((state) => state.rootReducer.getAllCategoriesReducer.data)
    const [updateBook, setupdateBook] = useState(null)

    console.log("GetAllCategories == >".getAllCategories)

    const [dataList, setDataList] = useState(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategorieslist(0))
    }, [])



    useEffect(() => {
        console.log("getAllCategories data ===> ", getAllCategories)
        if (getAllCategories != null && getAllCategories.status === 1) {
            setDataList(getAllCategories.data)
        }
    }, [getAllCategories])

    const onAcceptClick = () => {

    }

    const serviceOnOff = (index, checked) => {
        //const data = dataList[index].addedCategoryData.isActive = checked?1:0
        //setDataList(data)
    }

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    };

    const buttonStyle = (button) => ({
        backgroundColor: activeButton === button ? '#6EC1E4' : 'transparent',
        border: '1px solid #6EC1E4',
        color: '#000',
        padding: '10px',
        cursor: 'pointer',
    });



    return (
        <>
            <div className='manageservices'>
                {dataList != null && dataList.map((item, index) =>
                    <div>
                        <div className='row mt-3'>
                            <div className="col-12">
                                <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                                    <h5 className="m-0">{item.name}</h5>
                                    <Form>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            checked={item.addedCategoryData.isActive === 1 ? true : false}
                                            onChange={(val) => serviceOnOff(index, val)}
                                        />
                                    </Form>
                                </div>
                            </div >
                            <div className='col-12'>
                                <Form.Select className='input-group mb-0'>
                                    <option>Hourly Price</option>
                                    <option value="1">Fixed Price</option>
                                </Form.Select>
                            </div>
                            <div className='col-12'>
                                <div className="d-flex align-items-center heading_back_btn justify-content-between mt-3">
                                    <h6>Last Minute Nanny</h6>
                                    <div className='btn_yes '>
                                        <Button type='button' style={buttonStyle(1)}
                                            onClick={() => handleClick(1)}>Yes</Button>
                                        <Button type='button' style={buttonStyle(2)}
                                            onClick={() => handleClick(2)}>No</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Manageservices
