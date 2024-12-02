import React from "react";

const LoadingPage = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center min-h-screen z-[9999]">
            {/* Overlay Background */}
            <div className="absolute inset-0 bg-gray-100 bg-opacity-90"></div>

            <div className="relative flex flex-col items-center space-y-4">
                {/* Animated Spinner */}
                <div className="w-16 h-16 border-4 border-t-transparent border-green-600 rounded-full animate-spin"></div>

                {/* Loading Text */}
                <p className="text-lg font-medium text-gray-600">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;
