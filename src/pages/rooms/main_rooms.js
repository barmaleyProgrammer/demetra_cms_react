import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { destroyRoom, roomList } from "../../api";
import CurrentRoom from './current_room';
import Rooms from './rooms';
import Current_room from "./current_room";

const MainRooms = () => {
    const { id } = useParams();
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (id) {
            const room = rooms.find((item) => item.id == id);
            setRoom(room);
        } else {
            setRoom(null);
        }
    }, [id]);

    const getData = () => {
        return roomList().then((result) => {
            setRooms(result);
        });
    }

    const destroy = (id) => {
        console.log('destroy', id);
        destroyRoom(id).then(() => {
            getData();
        });
        // getData();
    };

    const edit = (payload) => {
        console.log('edit', id);
        getData();
    }

    return <Rooms rooms={rooms} destroy={destroy} />;
    // return room ? <CurrentRoom mainPhoto={room} room={room.room_photos} edit={edit} /> : <Rooms rooms={rooms} destroy={destroy} />;
};
export default MainRooms;