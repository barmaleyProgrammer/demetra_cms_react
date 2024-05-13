import React, {useEffect, useState} from 'react';
import {newoneEdit, newoneInfo, photoInfo, photosList} from "../../api";
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const Submit = (event) => {
        event.preventDefault();
        // newoneEdit(form).then(() => {
        //     navigate('/news');
        // });
    };

    return (
        <div className="w-full h-full px-4 mx-auto py-6">
            <div>
                <div className="w-full p-6 space-y-8 rounded-lg">
                    <h1 className="text-2xl font-bold">
                        Змінити фото
                    </h1>
                    <form className="mt-8 space-y-6 from" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="mb-6 lg:max-w-xl">
                            <img src={form.image} width="100" height="100" />
                            <InputField
                                className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                autoComplete="off"
                                type="file"
                                label="додати фото"

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