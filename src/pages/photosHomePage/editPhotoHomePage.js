import React, {useEffect, useState} from 'react';
import { photoEdit, photoInfo } from "../../api";
import {useNavigate, useParams} from "react-router-dom";
import InputField from "../../components/inputField";


const EditPhotoHomePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        photoInfo(id).then((result) => setForm(result));
    }, []);

    const [form, setForm] = useState({
        image: ''
    });

    const handleInputChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prevProps) => ({
                    ...prevProps,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(img);
        }
    };

    const Submit = (event) => {
        event.preventDefault();
        photoEdit(form).then(() => {
            navigate('/photosHomePage');
        });
    };

    return (
        <div className="w-full h-full px-4 mx-auto py-6">
            <div>
                <div className="w-full p-6 space-y-8 rounded-lg">
                    <h1 className="text-2xl font-bold">
                        Змінити фото
                    </h1>
                    <form className="mt-6 space-y-6 from" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="mb-6 lg:max-w-xl">
                            <img className="mb-6" src={form.image} width="200" height="200" />
                            <InputField
                                className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                autoComplete="off"
                                type="file"
                                name={'image'}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input
                            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                            name="submit" type="submit" value="Зберегти"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPhotoHomePage;