import React, {useEffect, useState} from 'react';
import {newoneEdit, newoneInfo} from "../../api";
import {useNavigate, useParams} from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import InputField from "../../components/inputField";
import tinymceConfig from "../../tinyMceConfig";


const EditNew = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        newoneInfo(id).then((result) => setForm(result));
    }, []);

    const [form, setForm] = useState({
        title: '',
        body: '',
        publish_date: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };
    const handleInputChangeDate = (event) => {
        const publish_date = event;
        setForm((prevProps) => ({
            ...prevProps,
            publish_date
        }));
    };

    const onEditorChange = (a, editor) => {
        const body = editor.getContent();
        setForm((prevProps) => ({
            ...prevProps,
            body
        }));
    };

    const Submit = (event) => {
        event.preventDefault();
        newoneEdit(form).then(() => {
            navigate('/news');
        });
    };

    return (
        <div className="w-full h-full px-4 mx-auto py-6">
            <div>
                <div className="w-full p-6 space-y-8 rounded-lg">
                    <h1 className="text-2xl font-bold">
                        Змінити новину
                    </h1>
                    <form className="mt-8 space-y-6 from" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="mb-6 lg:max-w-xl">
                            <InputField
                                label={'Назва новини'}
                                placeholder={'назва новини'}
                                type={'text'}
                                name={'title'}
                                required={true}
                                maxLength="256"
                                minLength="2"
                                autoComplete="off"
                                value={form.title}
                                onChange={handleInputChange}
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
                        <div className="mb-6 lg:max-w-xl">
                            <InputField
                                required={false}
                                type="date"
                                value={form.publish_date}
                                name={'date'}
                                onChange={(event) => handleInputChangeDate(event.target.value)}
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

export default EditNew;