import React, { useEffect, useState } from 'react'

function EditUserForm({ editUserUrl, setEditUserUrl }) {

    let [userdata, setUserData] = useState({})

    async function getUserData() {
        var data = await fetch(editUserUrl).then(res => {
            return res.json();
        });
        //console.log(data);
        setUserData(data.results);
        console.log(data);
    }


    useEffect(() => {
        getUserData()
    }, [])

    function closeEditUserForm() {
        setEditUserUrl('')

    }


    return (
        <div className='EditUserForm'>
            <div className='loading-cirlce' >
                <span className='circle circle1'>
                    <span className='circle circle2'>
                        <span className='circle circle3'></span>
                    </span>
                </span>
            </div>
            <div className='backkground-layer' onClick={closeEditUserForm}></div>
            <div className='edit-user-container bg-white p-2'>
                <button className='edit-user-close' onClick={closeEditUserForm}>X</button>
                <form>
                    <input placeholder='UserName' />
                    <input placeholder='FirstName' />
                    <input placeholder='LastName' />
                    <input placeholder='Email' />
                    <input placeholder='password' />
                    <input placeholder='Address' />
                    <input placeholder='Phone' />
                    <input placeholder='FatherName' />
                    <input placeholder='MotherName' />
                    <input placeholder='Field' />
                    <input placeholder='Level' />
                    <input placeholder='Class' />
                    <input placeholder='' />
                    <img width="100" alt='userimg' />
                    <button>save</button>
                </form>
            </div>
        </div>
    )
}

export default EditUserForm