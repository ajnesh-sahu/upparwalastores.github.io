import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Addstore = () => {
 
  const router = useRouter()
  const [disabled, setDisabled] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [storeid, setStoreid] = useState('')
  const [storename, setStorename] = useState('')
  const [address, setAddress] = useState('')
  const [storeimg, setStoreimg] = useState('')
  const [storelink, setStorelink] = useState('')
  const [pincode, setPincode] = useState('')
  const [passcode, setPasscode] = useState('')
  useEffect(() => {
    if(passcode == "PhoneNumber"){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  }, [passcode])
  const handleChangee = (e) => {
    if (e.target.name == 'passcode') {
      setPasscode(e.target.value)
    }}
  
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'storename') {
      setStorename(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'storeid') {
      setStoreid(e.target.value)
    }
    else if (e.target.name == 'address') {
        setAddress(e.target.value)
      }
      else if (e.target.name == 'pincode') {
        setPincode(e.target.value)
      }
      else if (e.target.name == 'storelink') {
        setStorelink(e.target.value)
      }
      else if (e.target.name == 'storeimg') {
        setStoreimg(e.target.value)
      }

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, phone, storeid, storelink, address, pincode, storeimg, storename }


    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addstores`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    setName('')
    setEmail('')
    setPhone('')
    setStorename('')
    setStorelink('')
    setStoreid('')
     setPincode('')
     setStoreimg('')
    setAddress('')
    setPasscode('')
    
    toast.success('Your store has been created!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className=" flex items-start justify-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto rounded-full bg-indigo-500" src="/logobag.png" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a Store</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
             
            </p>
          </div>
          <div>
                <input value={passcode} onChange={handleChangee} id="passcode" name="passcode" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="passcode" />
              </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Enter Woner Name</label>
                <input value={name} onChange={handleChange} id="name" name="name" type="text" required className="mt-7 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Your Full Name" />
              </div>
              <div>
                <label htmlFor="storename" className="sr-only">Enter Store Name</label>
                <input value={storename} onChange={handleChange} id="storename" name="storename" type="text" required className="mt-6 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Store Name" />
              </div>
              <div>
                <label htmlFor="storelink" className="sr-only">Store Link</label>
                <input value={storelink} onChange={handleChange} id="storelink" name="storelink" type="text" required className="mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Store Link" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input value={email} onChange={handleChange} id="email" name="email" type="text" required className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="email" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input value={phone} onChange={handleChange} id="phone" name="phone" type="text" required className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone" />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">Store Address</label>
                <input value={address} onChange={handleChange} id="address" name="address" type="text" required className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Store Address" />
              </div>
              <div>
                <label htmlFor="storeid" className="sr-only">Store Id</label>
                <input value={storeid} onChange={handleChange} id="storeid" name="storeid" type="text" required className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Store Id" />
              </div>
              <div>
                <label htmlFor="pincode" className="sr-only">Pincode</label>
                <input value={pincode} onChange={handleChange} id="pincode" name="pincode" type="text" required className="my-0.5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Pincode" />
              </div>
              <div>
                <label htmlFor="storeimg" className="sr-only">Store Image</label>
                <input value={storeimg} onChange={handleChange} id="storeimg" name="storeimg" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="store image link" />
              </div>
           
            </div>

            <div>
              <button disabled={disabled} type="submit" className="disabled:bg-indigo-200 disabled:cursor-not-allowed group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Create a Store
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addstore