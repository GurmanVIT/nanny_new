import React from 'react';
import about from '../../assets/img/about.jpg';
import visa_payment_card from '../../assets/img/visa-payment-card.png';
import nany_icon from '../../assets/img/nany_icon.png';

const Profile = () => {
    return (
        <>
            <div className="container">
                <div className='top-padding'>
                    <div className="row mb-5">
                        <div className="col-md-3 mb-3 mb-md-0 h-100">
                            <card className="rounded overflow-hidden">
                                <div className="profile_photo text-center p-3">
                                    <img src={about} alt="profile" />
                                    <h2 className="mt-3">My Name</h2>
                                </div>
                                <div className="profile_edit_options">
                                    <div className="p-3 profile_option">
                                        <i className="fa fa-edit"></i>
                                        <span className="ms-2">Edit Profile</span>
                                    </div>
                                    <div className="p-3 profile_option">
                                        <i className="fa fa-lock"></i>
                                        <span className="ms-2">Change Password</span>
                                    </div>
                                    <div className="p-3 profile_option" >
                                        <i className="fa fa-cog"></i>
                                        <span className="ms-2">Payments</span>
                                    </div>
                                    <div className="p-3 profile_option">
                                        <i className="fa fa-cog"></i>
                                        <span className="ms-2">Promotions</span>
                                    </div>
                                    <div className="p-3 profile_option">
                                        <i className="fa fa-cog"></i>
                                        <span className="ms-2">Credits</span>
                                    </div >
                                </div >
                            </card >
                        </div >
                        <div className="col-md-9 h-100">
                            <card className="rounded p-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center mb-3">
                                            <h2 className="m-0">My Profile</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-sm-6 mb-3">
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                                    <h5 className="mb-1 mb-sm-0">First Name</h5>
                                                    <h3 className="mb-0">Nanny 1</h3>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 mb-3">
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                                    <h5 className="mb-1 mb-sm-0">Last Name</h5>
                                                    <h3 className="mb-0">Nanny 1</h3>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 mb-3">
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                                    <h5 className="mb-1 mb-sm-0">Phone Number</h5>
                                                    <h3 className="mb-0">(+341) 252 4241</h3>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 mb-3">
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                                    <h5 className="mb-1 mb-sm-0">Email Address</h5>
                                                    <h3 className="mb-0">njkbcsv@gmsimc.com</h3>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 mb-3">
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1 my_profile_border">
                                                    <h5 className="mb-1 mb-sm-0">Country</h5>
                                                    <h3 className="mb-0">USA</h3>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 mb-3">
                                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between pb-3 my_profile_border">
                                                    <h5 className="mb-1 mb-sm-0">Zipcode</h5>
                                                    <h3 className="mb-0">252422</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="row" ngIf="isEditSelected" >
                                <div className="col-12">
                                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                                        <button><i className="fa fa-arrow-left me-2" aria-hidden="true"></i></button>
                                        <h2 className="m-0">Edit Profile</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-4 edit_photo">
                                            <img src={about} alt="logo" />
                                            <a href="#" className="ms-3 change_image_btn">Change Porfile Image</a>
                                        </div>
                                        <div className="col-md-6">
                                            <form-field className="w-100 mb-4 pb-2" appearance="outline">
                                                <mat-label>First Name</mat-label>
                                                <input matInput type="text" placeholder="First Name" />
                                            </form-field>
                                        </div>
                                        <div className="col-md-6">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>Last Name</mat-label>
                                                <input matInput type="text" placeholder="Last Name" />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-md-6">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>Date Of Birth</mat-label>
                                                <input matInput placeholder='MM/DD/YYYY' />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-md-6">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>Email</mat-label>
                                                <input matInput type="text" placeholder="Enter Email" />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-md-6">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>mobile</mat-label>
                                                <input matInput type="text" placeholder="Phone Number" />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-md-6">
                                            <mat-form-field className="w-100" appearance="outline">
                                                <mat-label>Select Counrty</mat-label>
                                                <mat-select >
                                                    <mat-option>None</mat-option>
                                                    <mat-option value="option1">Option 1</mat-option>
                                                    <mat-option value="option2">Option 2</mat-option>
                                                    <mat-option value="option3">Option 3</mat-option>
                                                </mat-select>
                                            </mat-form-field>
                                        </div >
                                        <div className="col-md-6">
                                            <mat-form-field className="w-100" appearance="outline">
                                                <mat-label>Select Zipcode</mat-label>
                                                <mat-select>
                                                    <mat-option>None</mat-option>
                                                    <mat-option value="option1">Option 1</mat-option>
                                                    <mat-option value="option2">Option 2</mat-option>
                                                    <mat-option value="option3">Option 3</mat-option>
                                                </mat-select>
                                            </mat-form-field>
                                        </div >
                                        <div className="col-12">
                                            <div className="col-12">
                                                <button mat-fab extended color="primary" className="profile_button px-4">
                                                    Submit
                                                    <mat-icon>check_circle</mat-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div >
                                </div >
                            </div >
                            <div className="row" ngIf="isChangePasswordSelected" >
                                <div className="col-12">
                                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                                        <button><i className="fa fa-arrow-left me-2" aria-hidden="true"></i></button>
                                        <h2 className="m-0">Change Password</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>Current Password</mat-label>
                                                <input matInput type="text" placeholder="Enter Email" />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-12">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>New Password</mat-label>
                                                <input matInput type="text" placeholder="Enter Email" />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-12">
                                            <mat-form-field className="w-100 mb-4" appearance="outline">
                                                <mat-label>Confirm Password</mat-label>
                                                <input matInput type="text" placeholder="Enter Email" />
                                            </mat-form-field>
                                        </div>
                                        <div className="col-12">
                                            <button mat-fab extended color="primary" className="profile_button px-4">
                                                Submit
                                                <mat-icon>check_circle</mat-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div >
                            </div >
                            <div className="row" ngIf="ispaymentSelected" >
                                <div className="col-12">
                                    <div className="d-flex align-items-center mb-3 justify-content-between heading_back_btn">
                                        <div className="d-flex align-items-center">
                                            <button ><i className="fa fa-arrow-left me-2" aria-hidden="true"></i></button>
                                            <h2 className="m-0">Cards</h2>
                                        </div>
                                        <button className="card_type d-flex align-items-center rounded">
                                            <mat-icon className="me-2">add_box</mat-icon> Add Card
                                        </button>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <mat-card className="p-3 rounded card_box">
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="card_icon">
                                                        <img width="w-100" src={visa_payment_card} alt='visa' />
                                                    </div>
                                                    <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                </div>
                                                <h4 className="mb-3">2521 &nbsp;&nbsp; 2521 &nbsp;&nbsp; 5252 &nbsp;&nbsp;5215</h4>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="holder_details">
                                                        <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                        <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                    </div>
                                                    <button><mat-icon>delete_forever</mat-icon></button>
                                                </div>
                                            </mat-card>
                                        </div >
                                        <div className="col-md-6 mb-3">
                                            <mat-card className="p-3 rounded card_box">
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="card_icon">
                                                        <img width="w-100" src={visa_payment_card} alt='visa' />
                                                    </div>
                                                    <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                </div>
                                                <h4 className="mb-3">2521 &nbsp;&nbsp; 2521 &nbsp;&nbsp; 5252 &nbsp;&nbsp;5215</h4>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="holder_details">
                                                        <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                        <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                    </div>
                                                    <button><mat-icon>delete_forever</mat-icon></button>
                                                </div>
                                            </mat-card >
                                        </div >
                                        <div className="col-md-6 mb-3">
                                            <mat-card className="p-3 rounded card_box">
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="card_icon">
                                                        <img width="w-100" src={visa_payment_card} alt='visa' />
                                                    </div>
                                                    <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                </div>
                                                <h4 className="mb-3">2521 &nbsp;&nbsp; 2521 &nbsp;&nbsp; 5252 &nbsp;&nbsp;5215</h4>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="holder_details">
                                                        <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                        <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                    </div>
                                                    <button ><mat-icon>delete_forever</mat-icon></button>
                                                </div>
                                            </mat-card >
                                        </div >
                                        <div className="col-md-6 mb-3">
                                            <mat-card className="p-3 rounded card_box">
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="card_icon">
                                                        <img width="w-100" src={visa_payment_card} alt='visa' />
                                                    </div>
                                                    <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                </div>
                                                <h4 className="mb-3">2521 &nbsp;&nbsp; 2521 &nbsp;&nbsp; 5252 &nbsp;&nbsp;5215</h4>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="holder_details">
                                                        <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                        <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                    </div>
                                                    <button><mat-icon>delete_forever</mat-icon></button>
                                                </div>
                                            </mat-card >
                                        </div >
                                        <div className="col-md-6 mb-3">
                                            <mat-card className="p-3 rounded card_box">
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="card_icon">
                                                        <img width="w-100" src={visa_payment_card} alt='visa' />
                                                    </div>
                                                    <div className="card_type px-2 py-1 rounded">Crdit Card</div>
                                                </div>
                                                <h4 className="mb-3">2521 &nbsp;&nbsp; 2521 &nbsp;&nbsp; 5252 &nbsp;&nbsp;5215</h4>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="holder_details">
                                                        <h5 className="mb-0">Card Holder Namer<span className="ms-2">jhngnn</span></h5>
                                                        <h5 className="mb-0">Expired<span className="ms-2">jhngnn</span></h5>
                                                    </div>
                                                    <button><mat-icon>delete_forever</mat-icon></button>
                                                </div>
                                            </mat-card >
                                        </div >
                                    </div >
                                </div >
                            </div >
                            <div className="row" ngIf="isPromotionSelected" >
                                <div className="col-12">
                                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                                        <button><i className="fa fa-arrow-left me-2" aria-hidden="true"></i></button>
                                        <h2 className="m-0">Promotions</h2>
                                    </div>
                                    <div className="search_box w-100 d-flex">
                                        <mat-form-field className="w-100" appearance="outline">
                                            <mat-label>Favorite food</mat-label>
                                            <input matInput placeholder="Ex. Pizza" value="Sushi" />
                                        </mat-form-field>
                                        <button className="ms-3 px-4 text-nowrap redeem_btn" mat-raised-button>Redeem Coupen</button>
                                    </div>
                                </div >
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="mb-4">Available Coupens</h2>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="p-3 rounded card_box">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="card_icon">
                                                    <h2 className="m-0">Coupen Name</h2>
                                                </div>
                                                <div className="card_type px-2 py-1 rounded">Buy</div>
                                            </div>
                                            <div className="btn-cancel-nany-profile rounded my-3 text-center py-2 px-3 d-inline-block">30% Off</div>
                                            <h1 className="mb-3">30% Of on coupen VENDN20</h1>
                                            <div className="offer_validity pt-3">
                                                Offer vaild <span>Today, Till 6PM</span>
                                            </div>
                                        </mat-card>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="p-3 rounded card_box">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="card_icon">
                                                    <h2 className="m-0">Coupen Name</h2>
                                                </div>
                                                <div className="card_type px-2 py-1 rounded">Buy</div>
                                            </div>
                                            <div className="btn-cancel-nany-profile rounded my-3 text-center py-2 px-3 d-inline-block">30% Off</div>
                                            <h1 className="mb-3">30% Of on coupen VENDN20</h1>
                                            <div className="offer_validity pt-3">
                                                Offer vaild <span>Today, Till 6PM</span>
                                            </div>
                                        </mat-card>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="p-3 rounded card_box">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="card_icon">
                                                    <h2 className="m-0">Coupen Name</h2>
                                                </div>
                                                <div className="card_type px-2 py-1 rounded">Buy</div>
                                            </div>
                                            <div className="btn-cancel-nany-profile rounded my-3 text-center py-2 px-3 d-inline-block">30% Off</div>
                                            <h1 className="mb-3">30% Of on coupen VENDN20</h1>
                                            <div className="offer_validity pt-3">
                                                Offer vaild <span>Today, Till 6PM</span>
                                            </div>
                                        </mat-card>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="p-3 rounded card_box">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="card_icon">
                                                    <h2 className="m-0">Coupen Name</h2>
                                                </div>
                                                <div className="card_type px-2 py-1 rounded">Buy</div>
                                            </div>
                                            <div className="btn-cancel-nany-profile rounded my-3 text-center py-2 px-3 d-inline-block">30% Off</div>
                                            <h1 className="mb-3">30% Of on coupen VENDN20</h1>
                                            <div className="offer_validity pt-3">
                                                Offer vaild <span>Today, Till 6PM</span>
                                            </div>
                                        </mat-card>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="p-3 rounded card_box">
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="card_icon">
                                                    <h2 className="m-0">Coupen Name</h2>
                                                </div>
                                                <div className="card_type px-2 py-1 rounded">Buy</div>
                                            </div>
                                            <div className="btn-cancel-nany-profile rounded my-3 text-center py-2 px-3 d-inline-block">30% Off</div>
                                            <h1 className="mb-3">30% Of on coupen VENDN20</h1>
                                            <div className="offer_validity pt-3">
                                                Offer vaild <span>Today, Till 6PM</span>
                                            </div>
                                        </mat-card>
                                    </div>
                                </div>
                            </div >
                            <div className="row" ngIf="isCreditSelected" >
                                <div className="col-12">
                                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                                        <button><i className="fa fa-arrow-left me-2" aria-hidden="true"></i></button>
                                        <h2 className="m-0">Credits</h2>
                                    </div>
                                </div >
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="rounded card_box ">
                                            <div className="d-flex align-items-center">
                                                <div className="card_icon mx-3">
                                                    <img src={nany_icon} alt="logo /" />
                                                </div>
                                                <div className="credit_bg credit_box_main w-100 position-relative">
                                                    <h1 className="pt-5 pb-4 px-3">Nanny Line</h1>
                                                    <div className="credit_score mb-4 px-5">
                                                        <h5>Your Credit<span className="d-block">$ 25.00</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </mat-card>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="rounded card_box ">
                                            <div className="d-flex align-items-center">
                                                <div className="card_icon mx-3">
                                                    <img src={nany_icon} alt="logo /" />
                                                </div>
                                                <div className="credit_bg credit_box_main w-100 position-relative">
                                                    <h1 className="pt-5 pb-4 px-3">Nanny Line</h1>
                                                    <div className="credit_score mb-4 px-5">
                                                        <h5>Your Credit<span className="d-block">$ 25.00</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </mat-card>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <mat-card className="rounded card_box ">
                                            <div className="d-flex align-items-center">
                                                <div className="card_icon mx-3">
                                                    <img src={nany_icon} alt="logo /" />
                                                </div>
                                                <div className="credit_bg credit_box_main w-100 position-relative">
                                                    <h1 className="pt-5 pb-4 px-3">Nanny Line</h1>
                                                    <div className="credit_score mb-4 px-5">
                                                        <h5>Your Credit<span className="d-block">$ 25.00</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </mat-card>
                                    </div>
                                </div>
                            </div >*/}
                            </card >
                        </div >
                    </div >
                </div>

            </div >
        </>
    )
}

export default Profile;