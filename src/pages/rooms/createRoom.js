import React, { useState } from 'react';
import { createRoom } from "../../api";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import InputFileField from "../../components/inputFileField";
import {Editor} from "@tinymce/tinymce-react";
import tinymceConfig from "../../tinyMceConfig";


const CreateRoom = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        image: '',
        name: '',
        price: '',
        description: ''
    });
    const handleInputChangeName = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const onEditorChange = (a, editor) => {
        const description = editor.getContent();
        setForm((prevProps) => ({
            ...prevProps,
            description
        }));
    };
    const handleInputChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prevProps) => ({
                    ...prevProps,
                    image: reader.result,
                }));
            };
            reader.readAsDataURL(img);
        }
    };
    const Submit = (event) => {
        event.preventDefault();
        createRoom(form).then(() => {
            navigate('/main_rooms');
        });
    };

    return (
        <div className="w-full h-full px-4 mx-auto py-6">
            <div>
                <div className="w-full p-6 space-y-8 rounded-lg">
                    <h1 className="text-2xl font-bold">
                        Додати фото
                    </h1>
                    <form className="mt-8 space-y-6 from" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="mb-6 lg:max-w-xl">
                            {
                                form.image ? <img className="mb-6" src={form.image} width="200" height="200"/> : ""
                            }
                            <InputFileField
                                className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                required={true}
                                name={'image'}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-6 lg:max-w-xl">
                            <InputField
                                label={'Назва номера'}
                                placeholder={'назва номера'}
                                type={'text'}
                                name={'name'}
                                required={true}
                                maxLength="256"
                                minLength="2"
                                autoComplete="off"
                                value={form.name}
                                onChange={handleInputChangeName}
                            />
                        </div>
                        <div className="mb-6 lg:max-w-xl">
                            <InputField
                                label={'Ціна'}
                                placeholder={'ціна'}
                                type={'text'}
                                name={'price'}
                                required={true}
                                maxLength="256"
                                minLength="2"
                                autoComplete="off"
                                value={form.price}
                                onChange={handleInputChangeName}
                            />
                        </div>
                        <div className="mb-6">
                            <Editor
                                apiKey={tinymceConfig.apiKey}
                                init={tinymceConfig.tinyMCEOptions}
                                tagName={tinymceConfig.tagName}
                                value={form.body}
                                onEditorChange={onEditorChange}
                            />
                        </div>
                        <input
                            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                            name="submit" type="submit" value="Зберегти"/>
                        <button
                            className="mt-4 ml-4 px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                            type="button" onClick={() => window.history.back()}>
                            Назад до номерів
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default CreateRoom;