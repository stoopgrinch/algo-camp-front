import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-cover bg-center " style={{ backgroundImage: "url(/img/IMG_0156.JPG)" }}>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg text-center max-w-2xl w-full">
                <div className="mb-12 text-4xl font-bold text-gray-800">問題 編集</div>
                <form className="space-y-4">
                    <div className="p-3 px-5">
                        <label className="block text-gray-800 mb-2 font-semibold">Event</label>
                        <select value="events" className="bg-transparent">
                            <option value="a">a</option>
                            <option value="b">b</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">Title</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">難易度</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">制限時間</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">メモリ制限</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">問題内容</label>
                        <textarea className="w-full aspect-square border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">制約</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">入力フォーマット</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-800 mb-2 font-semibold">出力フォーマット</label>
                        <input className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" type="text" />
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">キャンセル</button>
                        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md cursor-pointer">更新</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Page;