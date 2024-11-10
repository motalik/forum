import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import icona from './img/icona.jpg';

function Icon() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate hook

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to /login when Login button is clicked
    };

    const handleSignUpClick = () => {
        navigate('/signup'); // Navigate to /signup when Sign Up button is clicked
    };

    return (
        <div className='mt-[-1%] mr-[1%]'>
            <img 
                src={icona} 
                alt="Icona" 
                className='w-[60px] h-auto rounded-full cursor-pointer' 
                onClick={toggleModal} 
            />
            
            {isOpen && (
                <div className="absolute top-[10%] right-[5%] bg-white shadow-lg p-4 rounded-md">
                    <div>
                        <button 
                            className="bg-blue-500 text-primary px-4 py-2 rounded-md mr-2"
                            onClick={handleLoginClick}
                        >
                            Login
                        </button>
                        <button 
                            className="bg-green-500 text-primary px-4 py-2 rounded-md "
                            onClick={handleSignUpClick}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Icon;
