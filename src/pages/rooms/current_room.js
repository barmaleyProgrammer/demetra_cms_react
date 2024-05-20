import { useEffect, useState } from 'react';
import Modal from "../../components/modal/modal";
import AddRoomPhoto from "./addRoomPhoto";
import EditRoomPhoto from "./editRoomPhoto";
import { useParams } from "react-router-dom";
import {getRoomPhoto} from "../../api";

const Current_room = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(false);
    const[roomPhotos, setRoomPhoto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const room_id = Number(id);
        getRoomPhoto(room_id).then((result) => {
            setRoomPhoto(result);
        });
    }, []);


    return (
        <div>
            <div className="flex justify-between">
                {/*<h2 className="pt-3 font-medium text-lg mb-3">Змінити фото <span*/}
                {/*    className="text-3xl">{mainPhoto.name}</span></h2>*/}
                <button type="button" onClick={() => setOpenModal(true)}
                        className="mt-4 mb-4 inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                    Додати фото номера
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
                        <AddRoomPhoto id={id} close={() => { window.location.reload(); setOpenModal(false); }}/>
                    </Modal>
                )
            }
            {
                currentPhoto && (
                    <Modal close={() => setCurrentPhoto(false)}>
                        <div className="p-10">
                            <EditRoomPhoto currentPhoto={currentPhoto} close={() => { window.location.reload(); setCurrentPhoto(false); }}/>
                        </div>

                    </Modal>
                )
            }
        </div>
    );
};

export default Current_room;