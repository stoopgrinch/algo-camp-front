import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url(/img/IMG_0153.jpg)" }}>
        <div className="min-h-screen flex justify-center items-center" >
            <div className="flex flex-row space-x-8">
                <div className="text-center">
                    <a href="./adminhome/users_admin" className="text-2xl font-bold text-gray-700 hover:text-black transition-colors border-b-4 border-transparent hover:border-green-700 py-2 px-4">　ユーザー管理　</a>
                </div>
                <div className="text-center">
                    <a href="./adminhome/quizzes_admin" className="text-2xl font-bold text-gray-700 hover:text-black transition-colors border-b-4 border-transparent hover:border-green-700 py-2 px-4">　問題管理　</a>
                </div>
                <div className="text-center">
                    <a href="./adminhome/events_admin" className="text-2xl font-bold text-gray-700 hover:text-black transition-colors border-b-4 border-transparent hover:border-green-700 py-2 px-4">　イベント管理　</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Page;







