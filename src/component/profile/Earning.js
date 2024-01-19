import React from 'react'

const Earning = ({provideProfit, total }) => {

   

    return (
        <>
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                        <h5 className="m-0 mb-2">Provider Profit</h5>
                        <h5>${provideProfit}</h5>
                    </div>
                    <div className='Earning'>
                        <div className="row">
                            <div className="col-3">
                                <div className='card'>

                                    <span>Total</span>
                                    <h6>${total}</h6>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Admin Profit</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>

                                    <span>Collected Cash</span>
                                    <h6>$0</h6>

                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className='card'>

                                    <span>Pay/Collect</span>
                                    <h6>$0</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                        <div>
                            <h5 className="m-0 mb-2 mt-3">Settlement By</h5>
                        </div>
                    </div>
                    <div className='Earning'>
                        <div className="row">
                            <div className="col-3">
                                <div className='card'>

                                    <span>Cash</span>
                                    <h6>$0</h6>
                                </div>

                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Card</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Wallet</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Remain</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                        <div>
                            <h5 className="m-0 mb-2 mt-3">Total Request</h5>
                        </div>
                    </div>
                    <div className='Earning'>
                        <div className="row">
                            <div className="col-3">
                                <div className='card'>
                                    <span>Accepted</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Completed</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Cancelled</span>
                                    <h6>$0</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Earning
