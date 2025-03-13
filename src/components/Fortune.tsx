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
            фывафыва
            <div className="relative w-[400px] h-[400px] rounded-full">
                {/* Колесо */}
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    backgroundColors={["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9C27B0", "#03A9F4"]}
                    textColors={["#ffffff"]}
                    outerBorderColor="#000"
                    outerBorderWidth={5}
                    radiusLineColor="#000"
                    radiusLineWidth={2}
                    fontSize={18}
                    onStopSpinning={() => setMustSpin(false)}
                />

                {/* Логотип в центре */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] z-[1000]">
                    <Image src={"/roboland_logo.png"} alt="RoboLand Logo" width={150} height={150} className={"w-[150px] h-[150px]"} />
                </div>

                {/* Указатель справа */}
                <div className="absolute top-1/2 right-[-15px] transform -translate-y-1/2">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-gray-900 border-r-[20px] border-r-transparent"></div>
                </div>
            </div>

            {/* Кнопка кручения */}
            <button
                className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                onClick={handleSpinClick}
                disabled={mustSpin}
            >
                Крутить
            </button>
        </div>
    );
};

export default WheelFortune;
