import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/logo-nanny.png";

const Signup = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="container py-5">
                        <a href="#" class="custom-logo d-block  login-logo signup-logo mx-auto">
                            <img class="mw-100" src={logo} alt="logo"/>
                        </a>
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3 offset-sm-1 col-sm-10">
                                <div class="p-5 shadow-sm p-3 mb-5 bg-body rounded">
                                    <form class="w-100 mb-4" appearance="outline">
                                        <label>Name</label>
                                        <input matInput type="text" placeholder="Enter Name"/>
                                    </form>
                                    <form class="w-100 mb-4" appearance="outline">
                                        <label>Email</label>
                                        <input matInput type="email" placeholder="Enter Email"/>
                                    </form>
                                    <form class="w-100 mb-4" appearance="outline">
                                        <label>Password</label>
                                        <input matInput type="password" placeholder="Enter Password"/>
                                    </form>
                                    <form class="w-100 mb-1" appearance="outline">
                                        <label>Confirm Password</label>
                                        <input matInput type="password" placeholder="Enter Password"/>
                                    </form>
                                    <div class="d-flex justify-content-between mb-3">
                                        <checkbox class="example-margin">Checked</checkbox>
                                </div>
                                <div class="d-flex flex-column align-items-center justify-content-center">
                                    <button mat-fab extended color="primary" class="login_button px-4">
                                        <icon>login</icon>
                                        Sign Up
                                    </button>
                                    <p class="mt-3">Already have an account ? <Link to="../login" >Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
  )
}

export default Signup