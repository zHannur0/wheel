"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import CategoriesTable from "@/components/SpinCircle";
import Image from "next/image";
import WinnerModal from "@/components/WinnerModal";

const Wheel = dynamic(() => import("react-custom-roulette").then((mod) => mod.Wheel), {
    ssr: false,
});

const data = [
    { option: "1" }, { option: "2" }, { option: "3" }, { option: "4" },
    { option: "5" }, { option: "6" }, { option: "7" }, { option: "8" },
    { option: "9" }, { option: "10" }, { option: "11" }, { option: "12" },
    { option: "13" }, { option: "14" }, { option: "15" }, { option: "16" },
    { option: "17" }, { option: "18" }, { option: "19" }, { option: "20" },
    { option: "21" }, { option: "22" }
];

const WheelFortune = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState<number>(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 gap-6 w-full">
            <div className="flex flex-col items-center w-[50%]">
                <div className="relative margin-auto">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        backgroundColors={["#D32E2E"]}
                        textColors={["#ffffff"]}
                        outerBorderColor="#000"
                        outerBorderWidth={4}
                        radiusLineColor="#000"
                        radiusLineWidth={1}
                        fontSize={20}
                        innerRadius={10}
                        onStopSpinning={() => setMustSpin(false)}
                    />
                        <Image src={"/roboland_logo.png"} alt="RoboLand Logo" width={100} height={100}
                               className="absolute left-1/2 top-1/2 z-40 transform -translate-x-[33%] -translate-y-[55%] " />
                </div>

                <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                    onClick={handleSpinClick}
                    disabled={mustSpin}
                >
                    Айналдыру
                </button>
            </div>

            {/* Список категорий */}

           <CategoriesTable/>
            {!mustSpin && prizeNumber > 0 && (
                <WinnerModal winnerIndex={prizeNumber} onClose={() => {
                    setPrizeNumber(0)
                }} />
            )}
        </div>
    );
};

export default WheelFortune;
