"use client";

import React from "react";

const categories = [
    ["3D прототипирование Level 1", "3D prototyping Level 1", "3D прототиптеу Level 1"],
    ["3D прототипирование Level 2", "3D prototyping Level 2", "3D прототиптеу Level 2"],
    ["Fischertechnik", "Fischertechnik", "Fischertechnik"],
    ["Roboland-Kazakhstan", "Roboland-Kazakhstan", "Roboland-Kazakhstan"],
    ["Большое путешествие", "Great journey", "Үлкен саяхат"],
    ["Кегельринг-квадро х 2", "Kegelring Quadro X2", "Кегельринг-квадро х 2"],
    ["Лабиринт Level 1", "Labyrinth Level 1", "Лабиринт Level 1"],
    ["Лабиринт Level 2", "Labyrinth Level 2", "Лабиринт Level 2"],
    ["Лабиринт водных роботов", "Aquatic robot labyrinth", "Су роботтарының лабиринті"],
    ["Маневрирование управляемых квадрокоптеров", "Manoeuvring of controlled quadcopters", "Басқарылатын квадрокоптерлерді маневрлеу"],
    ["Мини-футбол управляемых роботов", "Football of controlled robots", "Басқарылатын роботтардың шағын футболы"],
    ["Парный теннис", "Pair tennis", "Жұптық теннис"],
    ["Полоса препятствий", "Obstacle course", "Кедергілер жолағы"],
    ["Робогеометрия Level 1", "Robogeometry Level 1", "Робогеометрия Level 1"],
    ["Робогеометрия Level 2", "Robogeometry Level 2", "Робогеометрия Level 2"],
    ["Собери робота Level 1", "Build a robot Level 1", "Роботты жинаңыз Level 1"],
    ["Собери робота Level 2", "Build a robot Level 2", "Роботты жинаңыз Level 2"],
    ["Садақ ату", "Sadak aty", "Садақ ату"],
    ["Творческая категория «Роботы-спасатели» Level 1", "Creative category 'Rescuer robots' Level 1", "«Робот-құтқарушылар» шығармашылық санаты Level 1"],
    ["Творческая категория «Роботы-спасатели» Level 2", "Creative category 'Rescuer robots' Level 2", "«Робот-құтқарушылар» шығармашылық санаты Level 2"],
    ["Творческая категория «Роботы-спасатели» Level 3", "Creative category 'Rescuer robots' Level 3", "«Робот-құтқарушылар» шығармашылық санаты Level 3"],
    ["Теңге алу", "Tenge alu", "Теңге алу"]
];


const CategoriesTable = () => {
    return (
        <div className="flex flex-col items-center gap-2 w-1/2">
            <h1 className="font-bold text-xl">RoboLand 2025</h1>

            <div className="overflow-hidden rounded-lg border border-1 ">
                <table className="table-auto rounded-lg border-separate border-spacing-0 w-full text-sm md:text-base">
                    <thead className="bg-[#BAFFD4] text-gray-900">
                    <tr>
                        <th className="border border-gray-500 px-2 py-1 rounded-tl-lg">RoboLand 2025 санаттары</th>
                        <th className="border border-gray-500 px-2 py-1">Categories of the RoboLand 2025</th>
                        <th className="border border-gray-500 px-2 py-1 rounded-tr-lg">RoboLand 2025 категории</th>
                    </tr>
                    </thead>
                    <tbody className="bg-[#BAFFD4]">
                    {categories.map((row, index) => (
                        <tr key={index}>
                            {row.map((item, i) => (
                                <td key={i} className="border border-gray-400 px-2 py-1 text-xs">
                                    {index + 1}. {item}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default CategoriesTable;
