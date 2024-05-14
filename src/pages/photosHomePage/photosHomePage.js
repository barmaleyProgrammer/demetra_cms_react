import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Grid from "../../components/grid";
import {photosList, setActivePhoto, homePhotoDelete, homePhotoPagePosition} from "../../api";

const PhotosHomePage = () => {

    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        photosList().then((result) => setPhotos(result));
    }, []);

    const destroy = (id) => {
        homePhotoDelete(id).then(() => {
            photosList().then((result) => setPhotos(result));
        });
    };

    const up = (id) => {
        console.log(id)
        const payload = {
            id: id,
            action: 'up'
        };
        homePhotoPagePosition(payload).then(() => {
            photosList().then((result) => setPhotos(result));
        });
    };
    const down = (id) => {
        console.log(id)
        const payload = {
            id: id,
            action: 'down'
        };
        homePhotoPagePosition(payload).then(() => {
            photosList().then((result) => setPhotos(result));
        });
    };

    const columns = [
        {
            name: 'id',
            title: '#',
            render: (row, index) => {
                return (
                    <div>{index + 1}

                    </div>
                );
            },
        },
        {
            name: 'image',
            title: 'Зображення',
            render: (row) => {
                return (
                    <div>
                        <img className="h-20 w-20 mx-auto" src={row.image} alt="new_photo"/>
                    </div>
                );
            },
        },
        {
            name: 'name',
            title: 'is active',
            render: (row) => {
                return (
                    <div>
                        <input
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            id="actions"
                            name={'actions'}
                            type="checkbox"
                            checked={row.is_active}
                            onChange={(event) => handleInputChange(event, row.id)}
                        />
                    </div>
                );
            },
        },
        {
            name: 'is_active',
            render: (row) => {
                return (!row.is_active) ? 'Деактивована' : 'Активна';
            },
            title: 'АКТИВНА',
        },
        {
            name: 'position',
            title: 'зміна позиції',
            render: (row) => {
                return (
                    <div className="inline-flex space-x-1">
                        {
                            row.position < photos.length
                                ?
                                    <button className="mr-2" onClick={() => up(row.id)}>
                                        <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" space="preserve">
                                            <path id="XMLID_21_"
                                                  d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"/>
                                        </svg>
                                    </button>
                                :
                                    ""
                        }
                        {
                            row.position > 1
                            ?

                                <button className="mr-2" onClick={() => down(row.id)}>
                                    <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1"
                                         xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                         viewBox="0 0 330 330" space="preserve" transform="rotate(0)">
                                        <path id="XMLID_24_"
                                              d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5 C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"/>
                                    </svg>
                                </button>
                            :
                                ""
                        }
                    </div>
                );
            },
        },
        {
            name: 'actions',
            title: 'ДІЇ',
            render: (row) => {
                return (
                    <div className="inline-flex space-x-1">
                        <NavLink to={`/editPhotoHomePage/${row.id}`}>
                            <button
                                className="inline-flex items-center px-3 py-2 text-sm text-white rounded-lg bg-yellow-400 hover:bg-yellow-800"
                                title="Поміняти фото">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                    <path fillRule="evenodd"
                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
                                </svg>
                            </button>
                        </NavLink>
                        <button className="inline-flex items-center px-3 py-2 text-sm text-white rounded-lg bg-red-600 hover:bg-red-800" title="видалити" onClick={() => destroy(row.id)}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                );
            },
        }
    ];

    const handleInputChange = (event, id) => {
        const is_active = event.target.checked;
        setActivePhoto({id, is_active}).then(() => {
            photosList().then((result) => setPhotos(result));
        });
    };

    return (
            <div>
                <NavLink to="/addHomePagePhoto" type="button"
                         className="mt-4 mb-4 inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                    Додати фото
                </NavLink>
                <Grid columns={columns} rows={photos}/>
            </div>
    );
};

export default PhotosHomePage;