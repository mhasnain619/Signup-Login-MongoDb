import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {


    return (
        <div className="flex h-screen min-h-full  justify-center items-center bg-slate-100 px-6 py-12 lg:px-8">
            <div className='p-5 bg-white w-[500px] h-[400px] rounded-lg flex flex-col justify-center'>
                <div>
                    <Link to='/'>
                        <IoArrowBackCircleOutline className='ml-0 text-3xl md:mt-0 text-indigo-600 md:ml-8 cursor-pointer' />
                    </Link>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-3 md:mt-10 text-start text-2xl font-bold leading-9 tracking-tight text-indigo-950">
                            Hi!
                        </h2>
                        <h5 className='font-bold text-stone-500'>Enter your e-mail to forgot your password. You will recive a quick link to forgot your password
                        </h5>
                    </div>

                    <div className="mt-3 md:mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6">
                            <div>
                                <div className="mt-2">
                                    <input
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
                            <div className="flex flex-col gap-8 justify-between">

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        FORGOT
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
