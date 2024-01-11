import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import nannycategories from "../../assets/img/nanny_categories.png";
import about from "../../assets/img/about_main.jpeg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsAsync } from '../../store/apiSlice/NcategoriesSlice';
import Card from './Card';



const Nannycategories = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.cards.data);

    const [nannycatData, setNannycatData] = useState(null)


    useEffect(() => {
       
        dispatch(fetchCardsAsync());
    }, []);

    useEffect(() => {
        if (data != null) {
            setNannycatData(data.data)
        }
    }, [data])


    //if (loading === 'pending') {
    //    return <p>Loading cards...</p>;
    //}

    //if (error) {
    //    return <p>Error: {error}</p>;
    //}
    //const navigate = useNavigate();

    //const navigateToAnotherScreen = () => {
    //    navigate('/nanyList');
    //}

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
                 
                        {nannycatData != null ?
                           <div className="row">
                                {nannycatData.map((item) => <Card name={item.name} image={item.image}  />)}
                            </div>
                            : ''}

{/*navigateToAnotherScreen={navigateToAnotherScreen}*/}

                       
                 
                </div>
            </div>
        </>
    )
}

export default Nannycategories