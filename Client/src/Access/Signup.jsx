import React, { useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {
            name: name,
            email: email,
            password: password
        })
            .then(result => {
                console.log(result)
                alert('User Created')
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex h-screen min-h-full justify-center items-center bg-slate-100 px-6 py-12 lg:px-8">
            <div className='p-5 bg-white w-[500px] h-[400px] md:h-[450px] rounded-lg'>
                <Link to='/'>
                    <IoArrowBackCircleOutline className='mt-2 ml-0 text-3xl md:mt-3 text-indigo-600 md:ml-8 cursor-pointer' />
                </Link>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-3 md:mt-8 text-start text-2xl font-bold leading-9 tracking-tight text-indigo-950">
                        Hi!
                    </h2>
                    <h5 className='font-bold text-stone-500'>Create New Account</h5>
                </div>
                <div className="mt-3 md:mt-3  sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full border-0 border-b-2 py-1.5 px-2 text-indigo-950 placeholder:text-gray-400 bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-1">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    placeholder="example@gmail.com"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full border-0 border-b-2 py-1.5 px-2 text-indigo-950 placeholder:text-gray-400 bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="mt-1">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='*****'
                                    required
                                    autoComplete="current-password"
                                    className="block w-full border-0 border-b-2 py-1.5 px-2 text-indigo-950 placeholder:text-gray-400 bg-transparent focus:bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    SIGN UP
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex justify-center items-center w-full text-sm ">
                                    <Link to='/forgot' className="font-semibold text-center text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="mt-3 md:mt-6  text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
