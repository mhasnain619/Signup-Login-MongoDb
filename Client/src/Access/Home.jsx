import React from 'react'
import logo from '../Assets/download.png'
import { useNavigate } from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };
    const handleClickSign = () => {
        navigate('/signup');
    };

    return (
        <div className="flex h-screen min-h-full  justify-center bg-slate-100 px-6 py-12 lg:px-8">
            <div className='bg-white w-[500px] h-[550px] rounded-lg'>
                <div className="sm:mx-auto mt-10 flex justify-center  sm:w-full sm:max-w-sm">
                    <img src={logo} alt="" />
                </div>
                <div className="flex justify-center flex-col sm:mx-auto  sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-start text-2xl font-bold leading-9 tracking-tight text-indigo-950">
                        Hello!
                    </h2>
                    <h5 className='font-bold text-stone-500'>Best place to write stories</h5>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className='flex flex-col gap-4'>
                        <button
                            onClick={handleClick}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            LOGIN
                        </button>
                        <button

                            onClick={handleClickSign}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            SIGN UP
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home
