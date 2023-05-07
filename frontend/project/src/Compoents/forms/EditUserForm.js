import React, { useEffect, useState } from 'react'



function EditUserForm({ editUserUrl, setEditUserUrl }) {
    let [userdata, setUserData] = useState({})
    // console.log(userdata[0])

    let userform = () => {
        return (
            <div className='EditUserForm'>
                <div className='backkground-layer' onClick={closeEditUserForm}></div>
                <div className='edit-user-container bg-white py-5 px-3'>
                    <p className='edit-user-bar py-2 '>Edit NAMEEE </p>
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

    async function getUserData() {
        var data = await fetch(editUserUrl).then(res => {
            return res.json();
        });
        //console.log(data);
        setUserData(data.results);
        console.log(data);
        console.log(userdata)
    }


    useEffect(() => {
        getUserData()
    }, [])

    function closeEditUserForm() {
        setEditUserUrl('')

    }



    return (<>
        {userdata && userform()}
    </>
    )

}

export default EditUserForm