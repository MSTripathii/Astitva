import React from 'react';
import { Link } from 'react-router-dom';

const JoinCommunity = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r pt-6 md:pt-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">

                {/* For Daily Users Section */}
                <div className="flex flex-col items-center text-center bg-teal-600 p-6 md:p-8 rounded-lg shadow-md">
                    <span className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold mb-3">
                        Supporters
                    </span>
                    <h2 className="text-lg md:text-2xl font-semibold text-white">For Daily Users, Helpers</h2>
                    <p className="text-black mt-4 text-sm md:text-base font-semibold">
                        We are the market-leading technical interview platform to identify and hire developers with the right skills.
                    </p>
                    <Link to="/login">
                        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-[#f0f3f3] hover:text-black">
                            User Login
                        </button>
                    </Link>
                    <p className="mt-4 text-xs md:text-sm text-white">
                        Don't have an account? <span className="font-semibold text-black"><Link to="/signup">Sign Up</Link></span>
                    </p>
                </div>

                {/* For Shelter Owners Section */}
                <div className="flex flex-col items-center text-center bg-[#f6f5f5] p-6 md:p-8 rounded-lg shadow-md">
                <span className="bg-teal-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base mb-3">
                        Hearts
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#23ab94] md:mt-6">
                        For Shelter Owners
                    </h2>
                    <p className="text-black mt-4 text-sm md:text-base font-semibold">
                        Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
                    </p>
                    <Link to="/ownerlogin">
                        <button className="mt-6 px-6 py-3 bg-[#23ab94] text-white font-semibold rounded hover:bg-[#000000] hover:text-white">
                            Owners Login
                        </button>
                    </Link>
                    <p className="mt-4 text-xs md:text-sm text-teal-500 font-semibold">
                        Don't have an account? <span className="font-semibold text-black"><Link to="/ownersignup">Sign Up</Link></span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default JoinCommunity;
