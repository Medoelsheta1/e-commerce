import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const user = useSelector(state => state.cart.userData)
    return (
        <div className='profile '>
            <div className='profileContent'>
                <div className='profileTitle mb-5'>
                    <h1>Hello <span className='text-black'>{user.username}</span></h1>
                </div>
                <div className='profileDetails'>
                    <h4>userAccount:  <span className='text-black'>{user.email}</span></h4>
                    <h4>username:  <span className='text-black'>{user.username}</span></h4>
                    <h4>Confirmed:  <span className='text-black'>{user.confirmed && 'true'}</span></h4>
                    <h4 className='c-pointer'>change password</h4>
                </div>
            </div>

        </div>
    )
}

export default Profile