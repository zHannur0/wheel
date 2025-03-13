"use client";

import React from "react";
import CategoriesTable from "@/components/SpinCircle";
import WheelOfFortune from "@/components/WheelOfFortune/WheelOfFortune";

const WheelFortune = () => {


    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 gap-6 w-full">
            <div className="flex flex-col items-center w-[50%] ">
                <WheelOfFortune />
            </div>
           <CategoriesTable/>

        </div>
    );
};

export default WheelFortune;
