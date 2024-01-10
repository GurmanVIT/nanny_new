import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Card = ({ name, image}) => {

    const navigate = useNavigate();

    const navigateToAnotherScreen = () => {
        navigate('/nanyList');
    }
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className='nannay_cat_main d-block shadow bg-body rounded overflow-hidden'>
                <Link to="/nanyList"  onClick={() => navigateToAnotherScreen}>
                <div className="category_image">
                    <img src="https://picsum.photos/200" className="w-100" alt={name} />
                </div>
                <div className="px-2 pt-2 categoty_heading w-100 d-flex justify-content-between align-items-center">
                    <h6 className="m-0">{name}</h6>
                    <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Card
