"use client"
import React, { useState } from 'react';

const Dropdown = ({ state, onStateChange }) => {
    const City = [
    "Cairo",
    "Tanta",
    "Alexandria",
    "Aswan"
]
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onStateChange(option);
        setIsOpen(false);
    };
    return (
        <div className="flex flex-col gap-2 justify-center relative 
        items-center mb-10">
            <button
                className="
                order-solid border-2
                text-white
                hover:text-black
                border-white 
                px-20 py-2 rounded-md 
                focus:outline-none
                hover:bg-white
                font-bold
                text-lg"
                onClick={toggleDropdown}>
                {state}
            </button>

            {isOpen && (
                <div className="top-10 left-0  py-2 px-4 
                shadow-md rounded-md">
                    {/* Dropdown content */}
                    <ul className='flex flex-col gap-3 cursor-pointer'>
                        {City.map(city => (
                            <li onClick={() => handleOptionClick(city)}
                            key={city}
                            className={`px-3 py-1  rounded text-center
                            order-solid border-2 text-white 
                            hover:text-black 
                            hover:bg-white
                            ${state === city && "bg-green-500"}
                            `}>
                            {city}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;