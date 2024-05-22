import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-cover bg-center " style={{ backgroundImage: "url(/img/IMG_0156.JPG)" }}>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                <div className="mb-12 text-4xl font-bold text-gray-800">イベント 新規作成</div>
                <form className="space-y-4">
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">Name</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" placeholder="New Event!!!" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">Start</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="time" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">End</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="time" />
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">キャンセル</button>
                        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md cursor-pointer">作成</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Page;

