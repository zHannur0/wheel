import React, {useEffect, useRef} from "react";
import Image from "next/image";

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

const WinnerModal = ({ winnerIndex, onClose }: {winnerIndex:number, onClose: () => void}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Функция для обработки клика вне модального окна
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        // Добавляем обработчик события клика
        document.addEventListener("mousedown", handleClickOutside);

        // Убираем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    if (winnerIndex === null || winnerIndex < 0 || winnerIndex >= categories.length) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10  bg-opacity-10 z-50">
            <div ref={modalRef} className="bg-[#E8EAF6] text-black p-6 rounded-md shadow-lg text-center relative w-[70%] h-[70%]  max-h-[787px] flex flex-col items-center justify-center rounded-[25px]">
                <h2 className="text-4xl">
                    Таңдалған санат | Выбранная категория | Selected category
                </h2>

                {/* Кружок с номером */}
                <div className="flex justify-center my-4">
                    <div className="w-[200px] h-[200px] flex items-center justify-center border border-black rounded-full text-[96px] font-bold bg-white">
                        {winnerIndex + 1}
                    </div>
                </div>

                {/* Название категории на 3 языках */}
                <p className="text-4xl mb-5">{winnerIndex + 1}. {categories[winnerIndex][0]}</p>
                <p className="text-4xl mb-5">{winnerIndex + 1}. {categories[winnerIndex][1]}</p>
                <p className="text-4xl mb-5">{winnerIndex + 1}. {categories[winnerIndex][2]}</p>

                {/* Декоративные конфетти */}
                <div className="absolute left-5 top-0 w-20 h-full flex items-center">
                    <Image src={"/left.png"} alt="RoboLand Logo" width={122} height={385} />
                </div>
                <div className="absolute right-5 top-0 w-20 h-full flex items-center justify-end">
                    <Image src={"/right.png"} alt="RoboLand Logo" width={122} height={385} />

                </div>

                {/* Кнопка закрытия */}
                {/*<button*/}
                {/*    onClick={onClose}*/}
                {/*    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"*/}
                {/*>*/}
                {/*    Закрыть*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default WinnerModal;
