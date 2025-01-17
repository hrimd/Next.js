"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import BirthdaySelector from './optn/page';
// import SignUp from '@/app/Login/SignUp/page';

	
const SignUps = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	});
	const { name, email, password, passwordConfirmation } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== passwordConfirmation) {
			console.log("Passwords don't match");
		} else {
			const newUser = {
				name,
				email,
				password
			};

			try {
				const config = {
					headers: { 'Content-Type': 'application/json' }
				};
				const body = JSON.stringify(newUser);
				const res = await axios.post('/api/users', body, config);
				console.log(res.data);
			} catch (error) {
				console.log(error.response.data);
			}
		}
	};

	return (
        <main className=' flex flex-col w-full justify-center items-center '  >
            <section className='sm:px-2 sm:py-1 sm:max-w-sm max-w-sm w-64  shadow-md shadow-black m-2.5 p-1.5 rounded-md bg-slate-200 '>
{/* <section className="sm:px-2 sm:py-1 sm:max-w-sm max-w-sm  mx-auto mt-10  m-2.5 p-2.5 text-base w-full h-full bg-gray-200 bg-white rounded-md shadow-md"> */}
              <h4 className="text-2xl font-semibold text-center mb-6">Register an Account</h4>
                 <form onSubmit={handleSubmit} className="space-y-4"> 
        {/* <div> 
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
             <input type="text" name="name" value={name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> 
             </div>  */}
			 <div id="fullname_field" className="space-y-4">
				 <div className="flex space-x-4 w-2/3"> 
					<div className="flex flex-col space-y-2 w-1/2">
			  <label className="text-gray-600"
			   htmlFor="firstname">First name</label>
			    <input type="text" 
				className="outline-none  border border-gray-300 rounded-md p-2"
				 name="firstname" 
				 aria-required="true"
				  placeholder="First name"
				   aria-label="First name" 
				   id="firstname" /> </div> 
				   <div className="flex flex-col space-y-2 w-1/2">
				    <label className="text-gray-600" 
					htmlFor="lastname">Surname</label>
					 <input type="text"
					  className="border border-gray-300 rounded-md p-2"
					   name="lastname"
					    aria-required="true" 
						placeholder="Surname"
						 aria-label="Surname"
						  id="lastname" /> 
						  </div>
						   </div>
						    <div id="fullname_error_msg" 
							className="text-red-500">
								</div> 
								</div>

             <div className=''> 
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email:</label>
                <input type="email" name="email" value={email} onChange={handleChange} required className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> 
				<BirthdaySelector/>
                </div> 
                     <div className=''>
					 <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label> <input type="password" name="password" value={password} onChange={handleChange} required className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      </div>
                       <div>
                         <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700">Password Confirmation:</label> 
                         <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleChange} required className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> 
                         </div> 
					 </div>
                         <div>
                             <button type="submit"
							  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  > Register   </button> 
                             </div>
                              </form>
							  
                     <p className="mt-6 text-center text-sm text-gray-500">
						 Already have an account?
						  <Link href="/Login"
						    className="font-medium text-indigo-600 hover:text-indigo-500">
							 Click here to login.</Link> </p>
                                </section>
								</main>
	);
};

export default SignUps;