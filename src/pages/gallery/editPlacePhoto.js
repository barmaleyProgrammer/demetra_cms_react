import { useState } from "react";
import { destroyPlacePhoto, updatePlacePhoto } from "../../api";
import {useParams} from "react-router-dom";

const EditPlacePhoto = ({ currentPhoto, close }) => {
    const { id } = useParams();
    const [form, setForm] = useState(
        {
            image: '',
            gallery_place_id: '',
            id: ''
        }
    );

    const editPlacePhoto = (event) => {
        event.preventDefault();
        const payload = {
            id: Number(id),
            gallery_place_id: form.gallery_place_id,
            image: form.image,
        }
        console.log(payload);
        updatePlacePhoto(payload).then(() => {
            close();
        });
    };

    const handleInputChange = ( event, gallery_place_id, id ) => {
        console.log(id);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setForm({
                image: reader.result,
                gallery_place_id: id,
            });
        };
        reader.readAsDataURL(file);
    };

    const destroy = () => {
        const payload = {
            gallery_place_id: currentPhoto.gallery_place_id,
            id: currentPhoto.id
        }
        destroyPlacePhoto(payload).then(() => {
            close();
        });
    };

    return (
        <div>
            <form className="mt-6 space-y-6" action="#" autoComplete="off" onSubmit={editPlacePhoto}>
                <div className="flex space-x-10 mb-5">
                    <div className="bg-red-300 p-2">
                        <label htmlFor="old">старе фото</label>
                        <img className="mb-2 mt-1" id="old" src={currentPhoto.image} width="250" height="250"/>
                    </div>
                    {
                        form.image.length ?
                            <div className="bg-green-200 p-2">
                                <label htmlFor="new">нове фото</label>
                                <img className="mb-2 mt-1" src={form.image} width="250" height="250"/>
                            </div>
                            :
                            ''
                    }
                </div>
                <div className="w-auto text-center flex">
                    <input
                        className="hidden"
                        type="file"
                        id="files"
                        onChange={(e) => handleInputChange(e, currentPhoto.room_id, currentPhoto.id)}
                    />
                    <label htmlFor="files"
                           className="border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-1 mr-2">Замінити
                        фото</label>
                    {
                        !form.image.length ?
                            <button type="button"
                                    className="border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-1 mr-2"
                                    onClick={() => destroy()}>видалити</button>
                            : ''
                    }
                    {
                        form.image.length ?
                            <button
                                className="w-full p-1 text-base font-medium text-center text-white rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 sm:w-auto bg-indigo-700"
                                disabled={!form.image.length}>
                                Зберігти
                            </button> : ''
                    }
                </div>
                <button
                    className="ml-auto px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                    type="button" onClick={() => window.history.back()}>
                    Назад у Галерею
                </button>

            </form>
        </div>
    );
};

export default EditPlacePhoto;