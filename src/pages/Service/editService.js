import {useEffect, useState} from 'react';
import { roomList, updateRoom } from "../../api";
import {useNavigate, useParams} from "react-router-dom";
import InputField from "../../components/inputField";
import {Editor} from "@tinymce/tinymce-react";
import tinymceConfig from "../../tinyMceConfig";


const EditService = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState([]);
    useEffect(() => {
        const staticService = [
            {
                id: 1,
                name: "У вартість номера входить:",
                description: "<p>проживання в номері обраної категорії;<br>Спуск-підйом човна;<br>високошвидкісний Wi-Fi Інтернет;</p>",
            },
            {
                id: 2,
                name: "ДОДАТКОВІ ПОСЛУГИ:",
                description: "<p>Оренда катера-2500 грн;<br>Послуги єгера-1000 грн;<br>Спуск-підйом-500 грн*<br>Парковка катера-2500 грн/місяць;<br>Мийка катера-250-550 грн;<br>*для проживаючих-безкоштовно(один раз на добу);</p>",
            },
        ];
        const serviceId = staticService.find((item) => item.id == id);
        setService(serviceId); // Устанавливаем данные в состояние
        setForm(serviceId); // Устанавливаем данные в состояние
    }, []);

    const [form, setForm] = useState({
        name: '',
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
    const Submit = (event) => {
        event.preventDefault();
        // updateRoom(form).then(() => {
        //     navigate('/main_service');
        // });
    };

    return (
        <div className="px-4 mx-auto py-6">
            <h1 className="font-bold">
                <span
                    className="font-normal">Змінити дані послуги:</span> {service.name ? service.name.charAt(0).toUpperCase() + service.name.slice(1) : ''}
            </h1>
            <form className="mt-8 space-y-6" action="#" autoComplete="off" onSubmit={Submit}>
                    <div className="">
                        <InputField
                            label={'Назва послуги'}
                            placeholder={'назва послуги'}
                            type={'text'}
                            name={'name'}
                            required={true}
                            maxLength="256"
                            minLength="2"
                            autoComplete="off"
                            value={form.name}
                            style={{ width: '250px' }}
                            onChange={handleInputChangeName}
                        />
                    </div>
                <div className="mb-6">
                    <Editor
                        apiKey={tinymceConfig.apiKey}
                        init={tinymceConfig.tinyMCEOptions}
                        tagName={tinymceConfig.tagName}
                        value={form.description}
                        onEditorChange={onEditorChange}
                    />
                </div>
                <input
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                    name="submit" type="submit" value="Зберегти"/>
                <button
                    className="ml-4 px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                    type="button" onClick={() => window.history.back()}>
                    Назад до номерів
                </button>
            </form>
        </div>
    )
};

export default EditService;