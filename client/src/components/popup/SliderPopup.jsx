import { useState, useEffect } from "react";

const SliderPopup = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
        setIsVisible(isOpen); 
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false); 
        onClose();
    };


    return (
        <div
            className={`fixed inset-0 z-20 overflow-x-hidden overflow-y-hidden flex  bg-gray-500 bg-opacity-70 transition-transform duration-1000 ease-in-out ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="min-h-full sm:flex-1"></div>
            <div className="relative  w-full max-w-2xl p-4 bg-white shadow-2xl">
                <button
                    onClick={handleClose}
                    className="absolute right-12 text-5xl text-secondary scale-125 hover:text-primary transition-colors focus:outline-none rounded-xl hover:bg-gray-200 p-2 flex justify-center items-center"
                >
                    &times;
                </button>
                <div className="p-4 mt-24">{children}</div>
                </div>
        </div>
    );
}

export default SliderPopup;
