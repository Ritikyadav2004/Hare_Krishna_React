import React, { useState } from 'react'

const Login = () => {
    const [data,setData]= useState({
            name:'',
            email:'',
            password:'',
            
        });
    const handleChange=(e)=>{
           
       const {name , value}=e.target;
       setData((prev)=>({
        ...prev,
        [name]:value
       }))

    }
    const handleSubmit=(e)=>
    {     

        e.preventDefault();
        alert("Data Saved +"+JSON.stringify(data));

     
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Column: Image/Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/login_illustration.png" 
            alt="Login Illustration" 
            className="w-full max-w-sm h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback image in case the illustration is not copied yet
              e.target.src = "https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png";
            }}
          />
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your details to save your data.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm transition-colors duration-200"
                  placeholder="Enter Your name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              
               <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm transition-colors duration-200"
                  placeholder="Enter your Email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm transition-colors duration-200"
                  placeholder="Enter Your Password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>

             
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login