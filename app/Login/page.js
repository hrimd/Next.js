// import SignUp from "./SignUp/page";
// import Link from "next/link";

// export default function Login (){
//     return (
//         <main className="mt-6">
//             {/* signin/ */}
            
//             <h1>Signin</h1>
//             <button>
//             <ul >
           
//            <li className='text-violet-800 font-serif '><Link href="/Login/SignUp">SignUp</Link></li>
//            </ul>
//             </button>
//         </main>
    
//     )
// }
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
// import SignUps from '../SignUp/page';

const LoginForm = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			email,
			password
		};

		try {
			const config = {
				headers: { 'Content-Type': 'application/json' }
			};
			const body = JSON.stringify(user);
			const res = await axios.post('/api/auth', body, config);
			console.log(res.data);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const { email, password } = formData;
	return (
        <main className=' mx-auto w-full ' >
        <section className='w-[200px] mx-auto bg-gray-200 shadow-md shadow-black m-2.5 p-1.5 rounded-md '>
         {/* <section className="sm:max-[20px]  m-2.5 p-2.5 text-base w-full h-full bg-gray-200  w-sm max-w-sm mx-auto mt-10  rounded-md shadow-lg"> */}
             <h4 className="text-2xl font-semibold text-center mb-6">Login to Account</h4>
              <form onSubmit={(e) => handleSubmit(e)} className="space-y-4"> 
                <div> 
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                     <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> </div> 
                     <div>
                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label> <input type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" /> </div>
                          <div> 
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Login </button>
                             </div>
                              </form>
                               <p className="mt-6 text-center text-sm text-gray-500"> Don&lsquo;t have an account? <Link href="/SignUp" className="font-medium text-indigo-600 hover:text-indigo-500">Click here to register an account.</Link> </p>
                               {/* <p> <Link href="SignUp"> Sign up</Link></p> */}
                                </section>
                                </main>
	);
};

export default LoginForm;
