import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-cover bg-center " style={{ backgroundImage: "url(/img/IMG_0149.JPG)" }}>
        <div className="flex justify-center items-center min-h-screen" >
            <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center max-w-2xl w-full">
                <div className="mb-12 text-4xl font-bold text-gray-800">問題 実施</div>
                <a href="http://localhost:3000/login/events_normal/quizzes_normal">
                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full text-lg">
                        ← Quizzes
                    </button>
                </a>
                <form className="space-y-4">
                    <div className="p-3 px-5">
                        <label className="block text-gray-800 mb-2 font-semibold">使用言語</label>
                        <select value="events" className="bg-transparent">
                            <option value="a">Python</option>
                            <option value="b">Ruby</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">問題</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">制約</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">入力</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">出力</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">入力例1</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">出力例1</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">入力例2</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">出力例2</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">入力例3</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">出力例3</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                            <label className="block text-gray-800 mb-2 font-semibold">ソースコード</label>
                            <textarea 
                                className="w-full h-64 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400 resize-y"
                                placeholder="ソースコードを入力してください..."
                            />
                        </div>
                    <div className="flex justify-between">
                        <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">採点する</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Page;