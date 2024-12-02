import { useState, useRef } from "react";

const Popover = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef(null);

    // Toggle fungsi untuk popover
    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Tombol untuk memicu popover */}
            <button
                onMouseEnter={togglePopover} onMouseLeave={togglePopover}
                className="px-4 py-2 bg-blue-500 text-sm md:text-base text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
                {title}
            </button>

            {/* Konten popover */}
            {isOpen && (
                <div
                    ref={popoverRef}
                    className="absolute z-10 w-full max-w-2xl mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg"
                >
                    <p
                        className="p-4 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    {/* Panah popover */}
                    <div className="absolute -top-2 left-10 w-4 h-4 transform rotate-45 bg-white border-l border-t border-gray-200"></div>
                </div>
            )}
        </div>
    );
};

export default Popover;
