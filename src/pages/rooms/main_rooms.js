import { useState, useEffect } from 'react';
import { destroyRoom, roomList} from "../../api";
import Rooms from './rooms';
import Loader from "../../components/Loader/loader";

const MainRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setLoading(true);
        return roomList().then((result) => {
            setRooms(result);
            setLoading(false);
        });
    }

    const destroy = async (id) => {
        const room = rooms.find((item) => item.id == id);
        if (!room) {
            console.error('Місце не знайдено');
            return;
        }

    const confirmMessage = `Ви впевнені, що хочете видалити "${room.name}"?`;
        if (!window.confirm(confirmMessage)) {
            return;
        }
        try {
            setLoading(true);
            await destroyRoom(id);
            await getData();
        } catch (error) {
            console.error('Місце для знищення помилок', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        loading ? <Loader /> : <Rooms rooms={rooms} destroy={destroy} />
    )

};
export default MainRooms;