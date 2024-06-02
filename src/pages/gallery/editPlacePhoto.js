import { useState } from "react";
import { destroyRoomPhoto, updatePlacePhoto } from "../../api";

const EditPlacePhoto = ({ currentPhoto, close }) => {
    const [form, setForm] = useState(
        {
            image: '',
            room_id: '',
            id: ''
        }
    );

    const editPlacePhoto = (event) => {
        event.preventDefault();
        // updatePlacePhoto(form).then(() => {
        //     close();
        // });
    };

    // const handleInputChange = ( event, room_id, id ) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setForm({
    //             image: reader.result,
    //             room_id: room_id,
    //             id: id
    //         });
    //     };
    //     reader.readAsDataURL(file);
    // };

    const destroy = () => {
        const payload = {
            room_id: currentPhoto.room_id,
            id: currentPhoto.id
        }
        destroyRoomPhoto(payload).then(() => {
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
                        // onChange={(e) => handleInputChange(e, currentPhoto.room_id, currentPhoto.id)}
                    />
                    <label htmlFor="files" className="border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-1 mr-2">Замінити
                        фото</label>
                    {
                        !form.image.length ?
                            <button type="button" className="border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-1 mr-2"
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

            </form>
        </div>
    );
};

export default EditPlacePhoto;