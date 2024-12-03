import React from "react";

export default function Card({ title, value, footerText, icon, className, footerClassName }) {
    return (
        <div
            className={`bg-white shadow-md rounded-lg overflow-hidden w-full ${className}`}
        >
            <div className="flex items-center justify-between p-4">
                <div>
                    <p className="text-3xl font-semibold text-gray-800">{value}</p>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                </div>
                <div className="text-4xl text-green-500">{icon}</div>
            </div>
            <div className={`py-2 text-center ${footerClassName} text-sm font-medium`}>
                {footerText}
            </div>
        </div>
    );
}
