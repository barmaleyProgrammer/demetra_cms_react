import {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import InputField from "../../components/inputField";
import {Editor} from "@tinymce/tinymce-react";
import tinymceConfig from "../../tinyMceConfig";
import {ServiceContext} from "../../components/serviceContext";
import {serviceEdit} from "../../api";


const EditService = () => {
    const { services, updateService } = useContext(ServiceContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        const serviceItem = services.find(item => item.id === parseInt(id));
        if (serviceItem) {
            setForm(serviceItem);
        }
    }, [id, services]);

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
        serviceEdit(form).then((updatedService) => {
            updateService(updatedService); // Обновляем контекст
            navigate('/service');
        });
    };

    return (
        <div className="px-4 mx-auto py-6">
            <h1 className="font-bold">
                <span
                    className="font-normal">Змінити дані послуги:</span> {form.name ? form.name.charAt(0).toUpperCase() + form.name.slice(1) : ''}
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