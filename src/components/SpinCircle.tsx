"use client";

import React from "react";

const categories = [
    ["3D прототиптеу 1 деңгей", "3D prototyping level 1", "3D прототипирование 1 уровень"],
    ["3D прототиптеу 2 деңгей", "3D prototyping level 2", "3D прототипирование 2 уровень"],
    ["Fischertechnik", "Fischertechnik", "Fischertechnik"],
    ["Roboland-Kazakhstan", "Roboland-Kazakhstan", "Roboland-Kazakhstan"],
    ["Үлкен саяхат", "Great journey", "Большое путешествие"],
    ["Кегельринг-квадро х 2", "Keglering Quadro X2", "Кегельринг-квадро х 2"],
    ["Лабиринт 1 деңгей", "Labyrinth level 1", "Лабиринт 1 уровень"],
    ["Лабиринт 2 деңгей", "Labyrinth level 2", "Лабиринт 2 уровень"],
    ["Су роботтарының лабиринті", "Aquatic robot labyrinth", "Лабиринт водных роботов"],
    ["Басқарылатын квадрокоптерлерді маневрлеу", "Maneuvering of controlled quadcopters", "Маневрирование управляемых квадрокоптеров"],
    ["Басқарылатын роботтардың шағын футболы", "Football of controlled robots", "Мини-футбол управляемых роботов"],
    ["Жұптық теннис", "Pair tennis", "Парный теннис"],
    ["Кедергілер жолағы", "Obstacle course", "Полоса препятствий"],
    ["Робогеометрия 1 деңгей", "Robogeometry level 1", "Робогеометрия 1 уровень"],
    ["Робогеометрия 2 деңгей", "Robogeometry level 2", "Робогеометрия 2 уровень"],
    ["Роботы жинақтау 1 деңгей", "Build a robot level 1", "Собери робота 1 уровень"],
    ["Роботы жинақтау 2 деңгей", "Build a robot level 2", "Собери робота 2 уровень"],
    ["Садақ ату", "Archery", "Стрельба из лука"],
    ["«Робот-құтқарушылар» шығармашылық санаты 1 деңгей", "Creative category 'Rescuer robots' level 1", "Творческая категория 'Роботы-спасатели' 1 уровень"],
    ["«Робот-құтқарушылар» шығармашылық санаты 2 деңгей", "Creative category 'Rescuer robots' level 2", "Творческая категория 'Роботы-спасатели' 2 уровень"],
    ["«Робот-құтқарушылар» шығармашылық санаты 3 деңгей", "Creative category 'Rescuer robots' level 3", "Творческая категория 'Роботы-спасатели' 3 уровень"],
    ["Тенге алу", "Tenge alu", "Тенге алу"]
];

const CategoriesTable = () => {
    return (
        <div className="flex justify-center w-1/2">
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-400 text-sm md:text-base ">
                    <thead>
                    <tr className="bg-[#BAFFD4] text-gray-900">
                        <th className="border border-gray-500 px-2 py-1 rounded-lt-md">RoboLand 2025 санаттары</th>
                        <th className="border border-gray-500 px-2 py-1">Categories of the RoboLand 2025</th>
                        <th className="border border-gray-500 px-2 py-1 rounded-rt-md">RoboLand 2025 категории</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((row, index) => (
                        <tr key={index} className="bg-[#BAFFD4]">
                            {row.map((item, i) => (
                                <td key={i} className="border border-gray-400 px-2 py-1 text-xs">{index + 1}. {item}</td>
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
