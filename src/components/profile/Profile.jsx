import React, { useState } from 'react'
import { byId } from '../Url';

const Profile = ({ name = "John Doe", username = "johndoe", bio = "Frontend Developer", imageUrl = "https://via.placeholder.com/150" }) => {
  const [openEdit, setOpenedit] = useState(false);

  const edit = () => {
    setOpenedit(!openEdit);
  }

  const saveEdit = () => {
    localStorage.setItem("name", byId("name"))
  }

  return (
    <>
      <div className="max-w-2xl mx-4 cm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-lg cm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-40 overflow-hidden">
          <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
        </div>
        <div className={`transition-all duration-700 ${openEdit ? "h-0 overflow-hidden" : "h-[17rem] delay-700"}`}>
          <div className={`${openEdit ? "opacity-0" : ""} duration-200 mx-auto w-32 h-32 relative ${!openEdit && "-mt-16"} border-4 border-white rounded-full overflow-hidden`}>
            <img className="object-cover object-center h-32" src={localStorage.getItem("imageDataUrl")} alt='Woman looking front' />
          </div>
          <div className={`${openEdit ? "opacity-0" : ""} duration-200 text-center`}>
            <h2 className="font-semibold text-2xl">{localStorage.getItem("name")}</h2>
            <p className="text-gray-500">{localStorage.getItem("job")}</p>
          </div>
          <div className={`${openEdit ? "opacity-0" : ""} duration-200 p-4 border-t mx-8 mt-2`}>
            <button onClick={edit} className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shax1dow-lg font-semibold text-white px-6 py-2">Edit</button>
          </div>
        </div>
      </div>
      <div className={` ${openEdit ? "h-[27rem] delay-700" : "h-0 "} flex items-center flex-col shadow-xl overflow-hidden duration-700 max-w-2xl cm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-lg mx-auto`}>
        <form className={`flex flex-col w-[80%] ${!openEdit && "opacity-0"}`}>

          <label className=' py-1' htmlFor="name">Name</label>
          <input id='name' className='w-full py-2 outline-0 border-2' type="text" placeholder='Enter name' />

          <label className='mt-3 py-1' htmlFor="job">Job</label>
          <input id='job' className='w-full py-2 outline-0 border-2' type="text" placeholder='Enter Job' />

          <label htmlFor="img" className="mt-3 py-1">Choose Profile img</label>
          <input type="file" accept='image/*' id="img" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"/>

          <label htmlFor="img" className="mt-3 py-1">Choose Profile background</label>
          <input type="file" accept='image/*' id="img" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"/>
          <button onClick={() => { edit(); saveEdit(); }} type="button" className="text-white w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5">Green to Blue</button>
        </form>

      </div>
    </>
  )
}

export default Profile