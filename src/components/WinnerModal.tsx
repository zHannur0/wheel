import React, {useEffect, useRef} from "react";
import Image from "next/image";

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
            <div ref={modalRef}
                 className="bg-[#E8EAF6] text-black p-6 rounded-md shadow-lg text-center relative w-[70%] h-[70%]  max-h-[787px] flex flex-col items-center justify-center rounded-[25px]">
                <h2 className="text-4xl">
                    Таңдалған санат | Выбранная категория | Selected category
                </h2>

                {/* Кружок с номером */}
                <div className="flex justify-center my-4">
                    <div
                        className="w-[200px] h-[200px] flex items-center justify-center border border-black rounded-full text-[96px] font-bold bg-white">
                        {winnerIndex + 1}
                    </div>
                </div>

                {/* Название категории на 3 языках */}
                <p className="text-4xl mb-5">{winnerIndex + 1}. {categories[winnerIndex][0]}</p>
                <p className="text-4xl mb-5">{winnerIndex + 1}. {categories[winnerIndex][1]}</p>
                <p className="text-4xl mb-5">{winnerIndex + 1}. {categories[winnerIndex][2]}</p>

                {/* Декоративные конфетти */}
                <div className="absolute left-5 top-0 w-20 h-full flex items-center animate-slide-in-left">
                    <Image src={"/left.png"} alt="RoboLand Logo" width={122} height={385}/>
                </div>

                <div
                    className="absolute right-5 top-0 w-20 h-full flex items-center justify-end animate-slide-in-right">
                    <Image src={"/right.png"} alt="RoboLand Logo" width={122} height={385}/>
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
