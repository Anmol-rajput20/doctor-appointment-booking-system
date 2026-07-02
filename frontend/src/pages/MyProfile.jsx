import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useState } from 'react'

const MyProfile = () => {

  const [userData,setUserData] = useState({
    names:"Edward Vincent",
    image: assets.profile_pic,
    email: "edward@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1:"57th Cross, Richmond",
      line2:"Circle, Church Road,London"
    },
    gender:"Male",
    dob:'2000-01-20'
  })

  const [isEdit,setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image}></img>
      {
        isEdit ? 
        <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.names} onChange={e => setUserData(prev => ({...prev,names:e.target.value}))}></input> :
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.names}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone :</p>
          {
            isEdit ? 
            <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}></input> :
            <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address :</p>
          {
            isEdit ?
            <p>
              <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address, line1: e.target.value }}))} value={userData.address.line1} type='text'></input>
              <br/>
              <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address, line2: e.target.value }}))} value={userData.address.line2} type='text'></input>
            </p> :
            <p className='text-gray-500'>{userData.address.line1}
               <br/>
               {userData.address.line2}
            </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
          <p className='font-medium'>Gender :</p>
          {
            isEdit ? 
            <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev,gender: e.target.value}))} value={userData.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select> :
            <p className='text-gray-500'>{userData.gender}</p>
          }
          <p className='font-medium'>Birth Date :</p>
          {
            isEdit ?
            <input className='max-w-40 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({...prev,dob: e.target.value}))} value={userData.dob} ></input> :
            <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit ?
          <button className='border border-black px-8 py-4 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-500' onClick={() => setIsEdit(false)}>Save Information</button> :
          <button className='border border-black px-8 py-4 rounded-full text-sm hover:bg-black hover:text-white transition-all duration-500' onClick={() => setIsEdit(true)}>Edit Your Details</button>
        }
      </div>
    </div>
  )
}

export default MyProfile