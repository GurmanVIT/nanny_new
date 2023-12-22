import React, { useEffect, useState } from 'react'

const Api = () => {

    const [user,setUser]=useState([])

    useEffect (()=>{
        fetch("https://reqres.in/api/users?page=1").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp.data);
            })
        })
    },[])

    return (
        <>
            <div className='m-4'>
                <table>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>email</td>
                            <td>first-name</td>
                            <td>last-name</td>
                            <td>avatar</td>
                        </tr>
                        {
                            user.map((item,i)=>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>
                                    <img src={item.avatar} alt={'avatar'} style={{width:50, height:50}}/>
                                </td>
                            </tr>
                            )  
                        }
                    </tbody>
                </table>
                
            </div>
        </>
    );
};

export default Api;
