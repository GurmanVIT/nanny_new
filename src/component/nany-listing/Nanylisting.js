import React, { useEffect, useState } from 'react';
import about from '../../assets/img/about.jpg';
import CustomModal from '../CustomModal/CustomModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchnlistAsync } from '../../store/apiSlice/NanylistSlice';
import Nannycard from './Nannycard';


const Nanylisting = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.Nlist.data);

    const [nannyListData, setNannyListData] = useState(null)

    useEffect(() => {

        dispatch(fetchnlistAsync());
    }, []);

    useEffect(() => {
        if (data != null) {
            setNannyListData(data.data.data)
        }
    }, [data])


    return (
        <>
            <div className="">
                <div className="nanny_list_box ">
                    <div className='nanny_banner'>
                        <div className='heading_categories container'>
                            <h1>
                                <span>Part Time </span>
                            </h1>
                            <h1>
                                <span>And</span>
                            </h1>
                            <h1>
                                <span>Full Time</span>
                            </h1>
                        </div>
                    </div>

                </div>
                <div className='container sections_padding'>
                        {nannyListData != null ?
                            <div className="row">
                                {nannyListData.map((item) => <Nannycard firstName={item.nannyId.firstName} profileImage={item.nannyId.profileImage} price={item.price} time={item.time} lastName={item.nannyId.lastName} />)}
                            </div>
                            : ''}
                </div>
            </div>
        </>
    )
}

export default Nanylisting
