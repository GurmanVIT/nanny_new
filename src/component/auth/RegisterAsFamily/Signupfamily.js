import React from 'react'


const Signupfamily = () => {

    //const [phoneNumber, setPhoneNumber] = useState('');

    //const handlePhoneNumberChange = (e) => {
    //    setPhoneNumber(e.target.value);
    //};

    return (
        <>
         <section className="pt-5 pb-5">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h4>REGISTER AS FAMILY</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-5 mb-5">
                        <div className="form-area">
                            <div className="form-inner">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" value="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="mobile_code" className="form-control" placeholder="Phone Number" name="name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" name="name"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Postal Code" name="name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Password" name="name"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary form-submit">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Signupfamily
