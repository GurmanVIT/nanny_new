import React from 'react'
import { Link } from 'react-router-dom';
import about from "../../assets/img/about.jpg";

const Nannycategories = () => {
    return (
        <>
            <div class="container sections_padding">
                <h1 class="text-center mb-5 pb-3">
                    <span class="position-relative">Nanny Categories</span>
                </h1>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Link to="../nanyList" class="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                            <div class="category_image w-100 position-relative">
                                <img src={about} class="w-100" alt="image" />
                                <div class="px-3 pt-4 pb-3 categoty_heading position-absolute bottom-0 left-0 w-100">
                                    <h3 class="m-0">Part Time Full Time</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Link to="#" class="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                            <div class="category_image w-100 position-relative">
                                <img src={about} class="w-100" alt="image" />
                                <div class="px-3 pt-4 pb-3 categoty_heading position-absolute bottom-0 left-0 w-100">
                                    <h3 class="m-0">Occasional Nanny</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Link to="#" class="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                            <div class="category_image w-100 position-relative">
                                <img src={about} class="w-100" alt="image" />
                                <div class="px-3 pt-4 pb-3 categoty_heading position-absolute bottom-0 left-0 w-100">
                                    <h3 class="m-0">Spacial Priced Nanny</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Link href="#" class="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                            <div class="category_image w-100 position-relative">
                                <img src={about} class="w-100" alt="image" />
                                <div class="px-3 pt-4 pb-3 categoty_heading position-absolute bottom-0 left-0 w-100">
                                    <h3 class="m-0">Holiday Nanny</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <Link href="#" class="nannay_cat_main d-block shadow bg-body rounded overflow-hidden">
                            <div class="category_image w-100 position-relative">
                                <img src={about} class="w-100" alt="image" />
                                <div class="px-3 pt-4 pb-3 categoty_heading position-absolute bottom-0 left-0 w-100">
                                    <h3 class="m-0">Part Time Full Time</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nannycategories