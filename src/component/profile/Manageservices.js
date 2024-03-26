import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, ToggleButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategorieslist } from '../../store/apiSlice/ManageservicesSlice';
import { updateNannyCatgories } from '../../store/apiSlice/UpdateNannyCatgoriesSlice';

const Manageservices = () => {
    const getAllCategories = useSelector((state) => state.rootReducer.getAllCategoriesReducer.data)
    const updatenannyCatgories = useSelector((state) => state.rootReducer.updateNannyCatgoriesReducer.data)
    const [updateBook, setupdateBook] = useState(null)

    console.log("GetAllCategories == >".getAllCategories)

    const [dataList, setDataList] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategorieslist(0))
    }, [])
    //useEffect(() => {

    //}, [])



    useEffect(() => {
        console.log("getAllCategories data ===> ", getAllCategories)
        if (getAllCategories != null && getAllCategories.status === 1) {
            setDataList(getAllCategories.data)
        }
    }, [getAllCategories])



    const handleToggleActive = (index, val) => {

        console.log("Active Val ===>", val)
        setDataList((dataList) => {
            const updatedCategories = [...dataList];

            if (updatedCategories[index] && updatedCategories[index].addedCategoryData) {
                updatedCategories[index] = {
                    ...updatedCategories[index],
                    addedCategoryData: {
                        ...updatedCategories[index].addedCategoryData,
                        isActive: val ? 1 : 0,
                    },
                };
            }

            return updatedCategories;
        });
    };

    const handleToggleFixedPrice = (index, val) => {

        console.log("handleToggleFixedPrice ===>", val)
        setDataList((dataList) => {
            const updatedCategories = [...dataList];

            // Check if the category and addedCategoryData are defined
            if (updatedCategories[index] && updatedCategories[index].addedCategoryData) {
                updatedCategories[index] = {
                    ...updatedCategories[index],
                    addedCategoryData: {
                        ...updatedCategories[index].addedCategoryData,
                        isFixedPrice: val === "Fixed Price" ? 1 : 0,
                    },
                };
            }

            return updatedCategories;
        });
    };

    const [activeButton, setActiveButton] = useState(null);

    const handleTogglebtn = (index, val) => {
        setDataList((dataList) => {
            const updatedCategories = [...dataList];
            if (updatedCategories[index] && updatedCategories[index].addedCategoryData) {
                updatedCategories[index] = {
                    ...updatedCategories[index],
                    addedCategoryData: {
                        ...updatedCategories[index].addedCategoryData,
                        isLastMinuteNanny: val
                    },
                };
            }
            return updatedCategories;
        });
    };


    const handleupdate = () => {

        const addedCategoryDataArray = dataList.map(item => item.addedCategoryData);

        console.log("Added Category Data ===> ", addedCategoryDataArray)

        const convertedData = addedCategoryDataArray.map(item => {
            const { isActive, ...rest } = item;
            return { status: isActive, ...rest };
        });

        const payload = {
            "categories": convertedData
        }

        dispatch(updateNannyCatgories(payload))

    }



    return (
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
                                        onChange={(val) => handleToggleActive(index, val.target.checked)}
                                    />
                                </Form>
                            </div>
                        </div >
                        <div className='col-12'>
                            <Form.Select className='input-group mb-0' value={item.addedCategoryData.isFixedPrice === 1 ? "Fixed Price" : "Hourly Price"}
                                onChange={(val) => handleToggleFixedPrice(index, val.target.value)}
                                disabled={item.addedCategoryData.isActive === 1 ? false : true}>
                                <option>Hourly Price</option>
                                <option>Fixed Price</option>
                            </Form.Select>
                        </div>
                        <div className='col-12'>
                            <div className="d-flex align-items-center heading_back_btn justify-content-between mt-3">
                                <h6>Last Minute Nanny</h6>
                                <div className='btn_yes '>
                                    <button
                                        style={{
                                            backgroundColor: item.addedCategoryData.isLastMinuteNanny === 1 ? '#89d6ce' : 'transparent',
                                            border: '1px solid #89d6ce',
                                            color: '#000',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            borderRadius: '4px',
                                        }}
                                        onClick={() => handleTogglebtn(index, 1)}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: item.addedCategoryData.isLastMinuteNanny === 0 ? '#89d6ce' : 'transparent',
                                            border: '1px solid #89d6ce',
                                            color: '#000',
                                            padding: '10px',
                                            cursor: 'pointer',
                                            borderRadius: '4px',
                                        }}
                                        onClick={() => handleTogglebtn(index, 0)}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className=''>
                <Button type='button' onClick={() => handleupdate()}>
                    Update
                </Button>
            </div>
        </div>
    )
}

export default Manageservices
