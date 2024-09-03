import { useState, useEffect } from 'react';
import { destroyRoom, roomList} from "../../api";
import Service from './service';
import Loader from "../../components/Loader/loader";

const MainService = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Задаем статический массив данных
        const staticService = [
            {
                id: 1,
                name: "У вартість номера входить:",
                description: "<p>проживання в номері обраної категорії;<br>Спуск-підйом човна;<br>високошвидкісний Wi-Fi Інтернет;</p>",
            },
            {
                id: 2,
                name: "ДОДАТКОВІ ПОСЛУГИ:",
                description: "<p>Оренда катера-2500 грн;<br>Послуги єгера-1000 грн;<br>Спуск-підйом-500 грн*<br>Парковка катера-2500 грн/місяць;<br>Мийка катера-250-550 грн;<br>*для проживаючих-безкоштовно(один раз на добу);</p>",
            },
        ];

        setService(staticService); // Устанавливаем данные в состояние
    }, []);

    // useEffect(() => {
    //     getData();
    // }, []);
    //
    // const getData = () => {
    //     setLoading(true);
    //     return roomList().then((result) => {
    //         setService(result);
    //         setLoading(false);
    //     });
    // }

    // const destroy = async (id) => {
    //     const room = rooms.find((item) => item.id == id);
    //     if (!room) {
    //         console.error('Місце не знайдено');
    //         return;
    //     }
    //
    // const confirmMessage = `Ви впевнені, що хочете видалити "${room.name}"?`;
    //     if (!window.confirm(confirmMessage)) {
    //         return;
    //     }
    //     try {
    //         setLoading(true);
    //         await destroyRoom(id);
    //         await getData();
    //     } catch (error) {
    //         console.error('Місце для знищення помилок', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        loading ? <Loader /> : <Service service={service} destroy={'destroy'} />
    )

};
export default MainService;