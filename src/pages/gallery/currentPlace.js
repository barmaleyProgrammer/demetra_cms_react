import { useEffect, useState } from 'react';
import Modal from "../../components/modal/modal";
import AddPlacePhoto from "./addPlacePhoto";
import EditPlacePhoto from "./editPlacePhoto";
import { useParams } from "react-router-dom";
import editPlacePhoto from "./editPlacePhoto";
import {getPlacePhoto} from "../../api";

const CurrentPlace = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(false);
    const [placePhotos, setPlacePhoto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const gallery_place_id = Number(id);
        getPlacePhoto(gallery_place_id).then((result) => {
            setPlacePhoto(result);
        });
    }, [currentPhoto , openModal]);


    return (
        <div>
            <div className="flex justify-between">
                <button type="button" onClick={() => setOpenModal(true)}
                        className="mt-4 mb-4 inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                    Додати фото номера
                </button>
            </div>
            <form className="mt-6 space-y-6" action="#" autoComplete="off" onSubmit={editPlacePhoto}>
                <div className="flex flex-wrap gap-10 w-full mx-auto justify-center bg-[#F0F5FA]">
                    {
                        placePhotos.map((item, key) => {
                            return (
                                <div key={key} className="">
                                    <img className="mb-2 mt-4" src={item.image} width="200" height="200" onClick={() => setCurrentPhoto(item)}/>
                                </div>
                            );
                        })
                    }
                </div>
            </form>
            {
                openModal && (
                    <Modal close={() => setOpenModal(false)}>
                        <AddPlacePhoto id={id} close={() => { window.location.reload(); setOpenModal(false); }}/>
                    </Modal>
                )
            }
            {
                currentPhoto && (
                    <Modal close={() => setCurrentPhoto(false)}>
                        <div className="p-10">
                            <EditPlacePhoto currentPhoto={currentPhoto} close={() => { setCurrentPhoto(false); }}/>
                        </div>

                    </Modal>
                )
            }
        </div>
    );
};

export default CurrentPlace;