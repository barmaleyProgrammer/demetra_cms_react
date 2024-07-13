import {useEffect, useState} from 'react';
import { placeList, updatePlace } from "../../api";
import {useNavigate, useParams} from "react-router-dom";
import InputField from "../../components/inputField";


const EditPlace = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [place, setPlace] = useState([]);
    const [newPlace, setNewPlace] = useState(false);

    const [form, setForm] = useState({
        id: '',
        name: '',
        main_photo: {
            id: '',
            image: '',
            is_main: true
        },
        image: '',
    });

    useEffect(() => {
        placeList().then((result) => {
            const place = result.find((item) => item.id == id);
            setForm(place);
            setPlace(place.main_photo);
        });
    }, []);

    const handleInputChangeName = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
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
                setNewPlace(true);
            };
            reader.readAsDataURL(img);
        }
    };
    const Submit = (event) => {
        event.preventDefault();
        console.log(form)
        const payload = {
            id: Number(id),
            name: form.name,
            photo: {
                id: Number(form.main_photo.id),
                image: form.image || form.main_photo.image,
                is_main: form.main_photo.is_main
            }
        }
        updatePlace(payload).then(() => {
            navigate('/gallery');
        });
    };


    return (
        <div className="w-full h-full px-4 mx-auto py-6">
            <div>
                <div className="w-full p-6 space-y-8 rounded-lg">
                    <h1 className="text-2xl font-bold">
                        Змінити дані локації "{form.name}"
                    </h1>
                    <form className="mt-8 space-y-6 from" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="mb-6 lg:max-w-xl">
                            <div className="flex space-x-10">
                                <div>
                                    <label>головне фото</label>
                                    <img className="mb-6" src={place.image} width="200" height="200"/>
                                </div>
                                {newPlace && <div>
                                    <label>нове фото</label>
                                    <img className="mb-6" src={form.image} width="200" height="200"/>
                                </div>
                                }
                            </div>
                            <input
                                className="hidden"
                                type="file"
                                id="files"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="files"
                                   className="border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-1 mr-2">Замінити
                                фото</label>
                        </div>
                        <div className="mb-6 lg:max-w-xl">
                            <InputField
                                label={'Назва локації'}
                                placeholder={'назва локації'}
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
                        <input
                            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                            name="submit" type="submit" value="Зберегти"/>
                        <button
                            className="ml-4 px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
                            type="button" onClick={() => window.history.back()}>
                            Назад у Галерею
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default EditPlace;