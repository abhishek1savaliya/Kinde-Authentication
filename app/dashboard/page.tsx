import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";


const DashboardPage = () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    return (
        <div
            className='flex flex-col items-center justify-center h-screen'
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1501908734255-16579c18c25f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='mb-10'>
            <p className='text-2xl font-bold'>Hi ! <span className='text-pink-500'>{user.given_name}</span> {user.family_name}!</p>
            <p>Your Email is <span className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 cursor-pointer'> {user.email}</span> 😁✌️</p>
            </div>
            <div className='center'>
                <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    <LogoutLink>Log out</LogoutLink>
                </button>
            </div>
        </div>
    );
};

export default DashboardPage;
