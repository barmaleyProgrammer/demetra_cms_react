import { useState } from 'react';
import { useParams } from "react-router-dom";
import InputField from "../../components/inputField";
// import { createPlacePhoto } from "../../api";


const AddPlacePhoto = ({close}) => {

    const { id } = useParams();
    const [form, setForm] = useState(
        {
            image: '',
            room_id: '',
        }
    );

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setForm({
                image: reader.result,
                room_id: Number(id),
            });
        };
        reader.readAsDataURL(file);
    };

    const addPlacePhoto = (event) => {
        event.preventDefault();
        // createPlacePhoto(form).then(() => {
        //     close();
        // })
    };

    return (
        <div className="p-8 bg-amber-200">
            <h1 className="text-2xl font-bold">
                Додати фото до номеру
            </h1>
            <form className="mt-6 space-y-6 from" action="#" autoComplete="off" onSubmit={addPlacePhoto}>
                <div className="flex mb-6 lg:max-w-xl">
                    <div>
                        {form.image.length ? <img className="mb-6" src={form.image} width="100" height="100"/> : ''}
                        <InputField
                            className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                            autoComplete="off"
                            type="file"
                            name={'image'}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button
                    className="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 sm:w-auto bg-indigo-700"
                    disabled={!form.image.length}>
                    Зберігти
                </button>
            </form>
        </div>
    );
};

export default AddPlacePhoto;