import { useEffect, useState } from 'react';
import Modal from "../../components/modal/modal";
import AddRoomPhoto from "./addRoomPhoto";
import EditRoomPhoto from "./editRoomPhoto";
import { useParams } from "react-router-dom";
import {getRoomPhoto, roomList} from "../../api";

const Current_room = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(false);
    const [roomPhotos, setRoomPhoto] = useState([]);
    const [roomName, setRoomName] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        roomList().then((result) => {
            const room = result.find((item) => item.id == id);
            setRoomName(room);
        });
    }, []);

    useEffect(() => {
        const room_id = Number(id);
        getRoomPhoto(room_id).then((result) => {
            setRoomPhoto(result);
        });
    }, [currentPhoto, openModal]);


    return (
        <div>
            <div className="flex space-x-2">
                {/*<h2 className="pt-3 font-medium text-lg mb-3">Змінити фото <span*/}
                {/*    className="text-3xl">{mainPhoto.name}</span></h2>*/}
                <button type="button" onClick={() => setOpenModal(true)}
                        className="mt-4 mb-4 inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                    <span className="font-normal mr-1">Додати фото номера:</span> {roomName.name ? roomName.name.charAt(0).toUpperCase() + roomName.name.slice(1) : ''}
                </button>
                <button
                    className="mt-4 mb-4 inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                    type="button" onClick={() => window.history.back()}>
                    Назад до номерів
                </button>
            </div>
            {/*<form className="mt-6 space-y-6" action="#" autoComplete="off" onSubmit={editRoomPhoto}>*/}
            <div className="flex flex-wrap gap-10 w-full mx-auto justify-center bg-[#F0F5FA]">
                {
                    roomPhotos.map((item, key) => {
                        return (
                            <div key={key} className="">
                                    <img className="mb-2 mt-4" src={item.image} width="200" height="200" onClick={() => setCurrentPhoto(item)}/>
                                </div>
                            );
                        })
                    }
                </div>
            {/*</form>*/}
            {
                openModal && (
                    <Modal close={() => setOpenModal(false)}>
                        <AddRoomPhoto id={id} close={() => { setOpenModal(false); }}/>
                    </Modal>
                )
            }
            {
                currentPhoto && (
                    <Modal close={() => setCurrentPhoto(false)}>
                        <div className="p-10">
                            <EditRoomPhoto currentPhoto={currentPhoto} close={() => { setCurrentPhoto(false); }}/>
                        </div>

                    </Modal>
                )
            }
        </div>
    );
};

export default Current_room;