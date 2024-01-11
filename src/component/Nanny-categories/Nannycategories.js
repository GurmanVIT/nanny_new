import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import nannycategories from "../../assets/img/nanny_categories.png";
import about from "../../assets/img/about_main.jpeg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsAsync } from '../../store/apiSlice/NcategoriesSlice';
import Card from './Card';



const Nannycategories = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.cards.data);



    useEffect(() => {
       
        dispatch(fetchCardsAsync());
    }, []);

    //if (loading === 'pending') {
    //    return <p>Loading cards...</p>;
    //}

    //if (error) {
    //    return <p>Error: {error}</p>;
    //}
    const navigate = useNavigate();

    const navigateToAnotherScreen = () => {
        navigate('/nanyList');
    }

    return (
        <>
            <div className=" nannycategories">
                <div className='banner_categories'>
                    <div className='heading_categories container'>
                        <h1>
                            <span>Nanny</span>
                        </h1>
                        <h1>
                            <span>Categories</span>
                        </h1>
                    </div>

                </div>

                <div className='container sections_padding'>
                 
                        {data.data != null ?
                           <div className="row">
                                {data.data.map((item) => <Card name={item.name} image={item.image} navigateToAnotherScreen={navigateToAnotherScreen} />)}
                            </div>
                            : ''}

                        {/*<div className="col-lg-4 col-md-6 mb-4">
                            <div className="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                                <Link onClick={() => navigateToAnotherScreen()} >
                                    <div className="category_image">
                                        <img src={nannycategories} className="w-100" alt="image" />
                                    </div>
                                    <div className="px-2 pt-2 categoty_heading w-100  d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Occasional Nanny</h6>
                                        <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                                <Link to="#">
                                    <div className="category_image">
                                        <img src={nannycategories} className="w-100" alt="image" />
                                    </div>
                                    <div className="px-2 pt-2 categoty_heading w-100  d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Spacial Priced Nanny</h6>
                                        <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                                <Link href="#">
                                    <div className="category_image">
                                        <img src={nannycategories} className="w-100" alt="image" />
                                    </div>
                                    <div className="px-2 pt-2 categoty_heading w-100  d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Holiday Nanny</h6>
                                        <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                                <Link href="#">
                                    <div className="category_image">
                                        <img src={nannycategories} className="w-100" alt="image" />
                                    </div>
                                    <div className="px-2 pt-2 categoty_heading w-100  d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Part-time & Long-term bookings</h6>
                                        <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                                    </div>
                                </Link>
                            </div>
                        </div>*/}

                 
                </div>
            </div>
        </>
    )
}

export default Nannycategories