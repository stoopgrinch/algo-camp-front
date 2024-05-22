"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const handleLogout = () => {
        const confirmLogout = window.confirm("ログアウトしますか？");
        if (confirmLogout) {
        router.push("/login");
        }
    };

    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url(/img/IMG_0149.JPG)" }}>
        <div className=" text-white min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
                <h1 className="text-5xl font-semibold text-white">Quizzes</h1>
                    <button onClick={handleLogout} className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full text-lg">
                        Logout
                    </button>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-500 bg-opacity-75 rounded-lg overflow-hidden">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    難易度
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    実行時間制限
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    メモリ制限
                                </th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-white">
                                    A
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-white">
                                    abc
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-white">
                                    1 s
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-white">
                                    1 GB
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                                    <a href="./quizzes_normal/quiz_challenge/">
                                        <button className="text-gray-900 hover:text-gray-600">
                                            Challnge!
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};