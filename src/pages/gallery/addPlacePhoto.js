import { useState } from 'react';
import { useParams } from "react-router-dom";
import InputField from "../../components/inputField";
import { createPlacePhoto } from "../../api";


const AddPlacePhoto = ({close}) => {

    const { id } = useParams();
    const [form, setForm] = useState(
        {
            image: '',
            id: '',
        }
    );

    const handleInputChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prevProps) => ({
                    ...prevProps,
                    image: reader.result,
                }));
            console.log(form);
            };
            reader.readAsDataURL(img);
        }
    };

    const addPlacePhoto = (event) => {
        event.preventDefault();
        const payload = {
            gallery_place_id: Number(id),
            image: form.image,
        }
        createPlacePhoto(payload).then(() => {
            close();
        })
            .catch(error => {
                console.error('Error adding photo:', error);
            });
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