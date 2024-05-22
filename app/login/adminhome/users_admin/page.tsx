import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-cover bg-center " style={{ backgroundImage: "url(/img/IMG_0156.JPG)" }}>
        <div className="text-white min-h-screen font-sans">
            <a href="http://localhost:3000/login/adminhome/">
                <button className="text-white font-bold py-10 px-10 rounded-full text-2xl">
                    ←
                </button>
            </a>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center">
                <h1 className="text-5xl font-semibold text-white">Users</h1>
                <a href="./users_admin/users_new/">
                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full text-lg">
                        ＋
                    </button>
                </a>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-400 bg-opacity-50 rounded-lg overflow-hidden">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    Created Day
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3"></th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-white">
                                    チョコ
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
                                    choco
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
                                    2024/06/04
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-lg text-white">
                                    normal
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                                    <a href="./users_admin/users_edit/">
                                        <button className="text-gray-900 hover:text-gray-600">
                                            Edit
                                        </button>
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                                    <button className="text-gray-900 hover:text-gray-600">
                                        Delete
                                    </button>
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

export default Page;
