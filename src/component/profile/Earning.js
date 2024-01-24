import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEarnAsync } from '../../store/apiSlice/EarningSlice'

const Earning = () => {

    const earningData = useSelector((state)=>state.rootReducer.Earning.data)

   const dispatch = useDispatch()

       useEffect(() => {
        dispatch(fetchEarnAsync());
    }, []);


    useEffect(()=>{
        console.log("Earning Data ===> ",earningData)
        if(earningData!=null && earningData.status ===1){

        }
        else if(earningData!=null){
            alert(earningData.message)
        }

    },[earningData])

    return (
        <>
            <div className="row" >
            {earningData!=null&&
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                        <h5 className="m-0 mb-2">Provider Profit</h5>
                        <h5>${earningData.data.provideProfit}</h5>
                    </div>
                    <div className='Earning'>
                        <div className="row">
                            <div className="col-3">
                                <div className='card'>

                                    <span>Total</span>
                                    <h6>${earningData.data.total}</h6>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Admin Profit</span>
                                    <h6>${earningData.data.adminProfit}</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>

                                    <span>Collected Cash</span>
                                    <h6>${earningData.data.collectedCash}</h6>

                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className='card'>

                                    <span>Pay/Collect</span>
                                    <h6>${earningData.data.payCash}</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
}
            </div >
            
            <div className="row" >
            {earningData!=null&&
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
                                    <h6>${earningData.data.settlmentCash}</h6>
                                </div>

                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Card</span>
                                    <h6>${earningData.data.settlmentCard}</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Wallet</span>
                                    <h6>${earningData.data.settlmentWallet}</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Remain</span>
                                    <h6>${earningData.data.settlmentRemain}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
}
            </div >
            <div className="row" >
            {earningData!=null&&
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
                                    <h6>${earningData.data.requestAccepted}</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Completed</span>
                                    <h6>${earningData.data.requestCompleted}</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className='card'>
                                    <span>Cancelled</span>
                                    <h6>${earningData.data.requestCancelled}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
}
            </div >
            
        </>
    )
}

export default Earning
