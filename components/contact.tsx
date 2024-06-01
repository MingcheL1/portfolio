import React, { FC } from 'react';

export const Contact: FC = () => {
    return (
        <div className="relative text-white min-h-screen flex flex-col items-center justify-center space-y-6">
            <img className="z-[-1] fixed inset-0 w-full h-full object-cover" src="/BG.png" alt="background" />
            <h1 className="text-4xl font-bold">CONTACT ME</h1>
            <form action="https://docs.google.com/forms/d/e/1FAIpQLSd83K9tE359L6R7OIQrpS3Q2wJQmScNUnfmCyZNcyEkq0WVcw/formResponse" 
                className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.318464844" className="font-bold">Email <span className="text-red-500">*</span></label>
                    <input required type="email" name="entry.318464844" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.1085075487" className="font-bold">First Name <span className="text-red-500">*</span></label>
                    <input required type="text" name="entry.1085075487" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.346826141" className="font-bold">Last Name <span className="text-red-500">*</span></label>
                    <input required type="text" name="entry.346826141" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.590889659" className="font-bold">Phone Number <span className="text-gray-500">(Optional)</span></label>
                    <input type="text" name="entry.590889659" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.1717874853" className="font-bold">Instagram <span className="text-gray-500">(Optional)</span></label>
                    <input type="text" name="entry.1717874853" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.1799702698" className="font-bold">Discord <span className="text-gray-500">(Optional)</span></label>
                    <input type="text" name="entry.1799702698" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="entry.763760840" className="font-bold">Questions? <span className="text-gray-500">(Optional)</span></label>
                    <input type="text" name="entry.763760840" className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-200">Submit!</button>
            </form>
        </div>
    );
};
