"use client";

import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Image from "next/image";

const data = Array.from({ length: 24 }, (_, i) => ({ option: `${i + 1}` }));

const WheelFortune = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[350px] h-[350px]">
                {/* Колесо */}
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    backgroundColors={["#b71c1c"]}
                    textColors={["#ffffff"]}
                    outerBorderColor="#000"
                    outerBorderWidth={4}
                    radiusLineColor="#000"
                    radiusLineWidth={2}
                    fontSize={16}
                    onStopSpinning={() => setMustSpin(false)}
                />

                {/* Логотип в центре */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-[1000]">
                    <Image src={"/roboland_logo.png"} alt="RoboLand Logo" width={100} height={100} />
                </div>

                {/* Указатель справа */}
                <div className="absolute top-1/2 right-[-10px] transform -translate-y-1/2">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-gray-900 border-r-[20px] border-r-transparent"></div>
                </div>
            </div>

            {/* Кнопка кручения */}
            <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                onClick={handleSpinClick}
                disabled={mustSpin}
            >
                Крутить
            </button>
        </div>
    );
};

export default WheelFortune;
