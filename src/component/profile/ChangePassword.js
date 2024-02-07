import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePasswordApi } from '../../store/apiSlice/ChangePasswordSlice'

const ChangePassword = () => {

    const [password,setPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const changePasswordResponse = useSelector((state)=>state.rootReducer.changePasswordReducer.data)

    const dispatch = useDispatch()

    const onChangePasswordClick = ()=>{
        if(password.length===0){
            alert("Please enter current password");
        }
        else if(newPassword.length===0){
            alert("Please enter new password");
        }
        else if(confirmPassword.length===0){
            alert("Please enter confirm password");
        }else if(newPassword!==confirmPassword){
            alert("Confirm password not matched")
        }
        else{
            const payload = {
                password: newPassword,
                oldPassword: password
            }
            dispatch(changePasswordApi(payload))
        }
    }

    useEffect(()=>{
        console.log("Change Password Response ===> ",changePasswordResponse)
        if(changePasswordResponse!=null && changePasswordResponse.status === 1){
            alert(changePasswordResponse.message)
        }

    },[changePasswordResponse])

    return (
        <>
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn">

                        <h2 className="m-0">Change Password</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input matInput type="text" placeholder="Current Password" onChange={(val)=>setPassword(val.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div className="col-12">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input matInput type="text" placeholder="New Password" onChange={(val)=>setNewPassword(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-12">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input matInput type="text" placeholder="Confirm Password" onChange={(val)=>setConfirmPassword(val.target.value)}/>
                                </div>
                            </form>
                        </div>
                        <div className="col-12">
                            <button type='button' color="primary" className="btn profile_button px-4" onClick={()=>onChangePasswordClick()}>
                                SAVE
                            </button>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ChangePassword
