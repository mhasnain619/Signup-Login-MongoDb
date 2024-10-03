import React from 'react'
import logo from '../Assets/download.png'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="flex h-screen min-h-full  justify-center items-center bg-slate-100 px-6 py-12 lg:px-8">
            <div className='p-5 bg-white w-[500px] h-[400px] md:h-[550px] rounded-lg'>
                <div className='w-full flex justify-center items-center'>
                    <div className="sm:mx-auto mt-3 md:mt-10  w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center  sm:w-full sm:max-w-sm">
                        <img src={logo} height='100%' width='100%' alt="" />
                    </div>
                </div>
                <div className="flex justify-center flex-col sm:mx-auto  sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-start text-2xl font-bold leading-9 tracking-tight text-indigo-950">
                        Hello!
                    </h2>
                    <h5 className='font-bold text-stone-500'>Best place to write stories</h5>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className='flex flex-col gap-4'>
                        <Link
                            to='/login'
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            LOGIN
                        </Link>
                        <Link
                            to='/signup'
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            SIGN UP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
