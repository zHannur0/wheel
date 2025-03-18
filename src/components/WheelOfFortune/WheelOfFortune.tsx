'use client';

import React, { useState, useEffect } from 'react';
import WinnerModal from "@/components/WinnerModal";

const segments = Array.from({ length: 22 }, (_, i) => i + 1);
const colors = ['#4f92c6', '#84b43d'];
const segmentSize = 360 / segments.length;
const wheelSize = 600;
const centerX = 100;
const centerY = 100;
const radius = 90;
const textRadius = 75;
const spinDuration = 8;

export default function WheelOfFortune() {
    const [rotation, setRotation] = useState(0);
    const [resultNumber, setResultNumber] = useState<number | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [prev, setPrev] = useState<number>(7200);

    useEffect(() => {
        setMounted(true);
    }, []);

    const spinWheel = () => {
        if (isSpinning) return;
        setIsSpinning(true);
        setResultNumber(null);
        // Choose a random segment (number from 1 to 22)
        const chosenSegmentIndex = Math.floor(Math.random() * segments.length);
        const chosenSegment = segments[chosenSegmentIndex-1];

        // Calculate the angle at which the chosen sector stops under the pointer
        const targetRotation = 360 - (chosenSegmentIndex * segmentSize) - segmentSize / 2;
        const totalRotation = prev + targetRotation;
        setPrev(prev+7200);

        setRotation(totalRotation);

        setTimeout(() => {
            setResultNumber(chosenSegment);
            setIsSpinning(false);
        }, spinDuration * 1000);
    };

    const segmentPaths = segments.map((_, index) => {
        const startAngle = index * segmentSize;
        const endAngle = (index + 1) * segmentSize;

        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        const x1 = centerX + radius * Math.cos(startRad);
        const y1 = centerY + radius * Math.sin(startRad);
        const x2 = centerX + radius * Math.cos(endRad);
        const y2 = centerY + radius * Math.sin(endRad);

        const textMidAngle = ((startAngle + endAngle) / 2) * Math.PI / 180;
        const textX = centerX + textRadius * Math.cos(textMidAngle);
        const textY = centerY + textRadius * Math.sin(textMidAngle);

        return {
            path: `M ${centerX} ${centerY} L ${Math.round(x1)} ${Math.round(y1)} A ${radius} ${radius} 0 0 1 ${Math.round(x2)} ${Math.round(y2)} Z`,
            midAngle: (startAngle + endAngle) / 2,
            textX: Math.round(textX),
            textY: Math.round(textY)
        };
    });

    if (!mounted) {
        return <div className="flex justify-center items-center h-[600px]">Loading wheel...</div>;
    }

    return (
        <div className="flex flex-col items-center mt-10 relative">
            <div className="relative" style={{ width: wheelSize, height: wheelSize }}>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10">
                    <div className="w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[55px] border-r-gray-300" />
                </div>

                <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: `transform ${spinDuration}s cubic-bezier(0.2, 0.8, 0.2, 1)` // Увеличенное время анимации
                    }}
                >
                    {segments.map((num, index) => {
                        const segment = segmentPaths[index];

                        return (
                            <g key={num}>
                                <path
                                    d={segment.path}
                                    fill={colors[index % 2]}
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                                <circle
                                    cx={segment.textX}
                                    cy={segment.textY}
                                    r="7"
                                    fill="white"
                                />
                                <text
                                    x={segment.textX}
                                    y={segment.textY}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="5"
                                    fill="black"
                                    fontWeight="bold"
                                >
                                    {num}
                                </text>
                            </g>
                        );
                    })}

                    <circle cx={centerX} cy={centerY} r="20" fill="white" stroke="#84b43d" strokeWidth="2"/>
                    <image
                        href="/roboland_logo.png"
                        x={centerX-20}
                        y={centerY-30}
                        height="60"
                        width="60"
                        onError={(e) => {
                            const svg = e.currentTarget.ownerSVGElement;
                            if (svg) {
                                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                                text.setAttribute("x", "100");
                                text.setAttribute("y", "100");
                                text.setAttribute("text-anchor", "middle");
                                text.setAttribute("font-size", "10");
                                text.setAttribute("font-weight", "bold");
                                text.setAttribute("fill", "#4f92c6");
                                text.textContent = "RoboLand";

                                e.currentTarget.replaceWith(text);
                            }
                        }}
                    />
                </svg>
            </div>

            <button
                onClick={spinWheel}
                className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 disabled:opacity-50 font-bold transition-colors"
                disabled={isSpinning}
            >
                {isSpinning ? 'Айналуда...Крутится...Spinning...' : 'Кеттік! Поехали! Lets go!'}
            </button>

            {!isSpinning && resultNumber && (
                <WinnerModal winnerIndex={resultNumber} onClose={() => {
                    setResultNumber(null)
                }} />
            )}
        </div>
    );
}