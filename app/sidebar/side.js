"use client"
import React from 'react';
const side = () => {
    return (
        <div className="fixed inset-y-0 z-[19] hidden min-h-0 bg-black hover:ease-in-out sm:block group w-14 hover:w-52 sm:w-14 xl:w-52 top-[3.5rem]">
            <div className="flex items-center justify-center h-full text-white">
                <p>Sidebar Content</p>
            </div>
        </div>
    );
};

export default side
