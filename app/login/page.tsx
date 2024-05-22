import { ACTION } from 'next/dist/client/components/app-router-headers';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url(/img/IMG_0150.JPG)" }}>
        <div className="flex justify-center items-center min-h-screen">
            <div className=" p-20 rounded-lg text-center">
            <form action="/login/adminhome">
                <div className="mb-12 text-9xl font-weight-700 text-white">Mory Camp</div>
                <div className="mb-6">
                    <label className="block text-white mb-2">User ID</label>
                    <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="Enter your User ID" maxLength={32} required />
                </div>
                <div className="mb-6">
                    <label className="block text-white mb-2">Password</label>
                    <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="password" placeholder="Enter your Password" maxLength={256} required />
                </div>
                    <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-full text-lg">
                        Login
                    </button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Page;
