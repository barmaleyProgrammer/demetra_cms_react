import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Grid from "../../components/grid";
import logo from "../../img/logo.png"
import {newsList, setActiveNews, newoneDelete, destroyRoomPhoto} from "../../api";


const News = () => {

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
        // {
        //     name: 'image',
        //     title: 'Зображення',
        //     className: 'h-96 w-[500px]',
        //     render: (row) => {
        //         return (
        //             <div>
        //                 <img className="h-20 w-20 mx-auto" src={row.image} alt="new_photo"/>
        //             </div>
        //         );
        //     },
        // },
        {
            name: 'title',
            title: 'Заголовок',
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
            name: 'publish_date',
            title: 'ДАТА ПУБЛІКАЦІЇ',
        },
        {
            name: 'actions',
            title: 'ДІЇ',
            render: (row) => {
                return (
                    <div className="inline-flex space-x-1">
                        <NavLink to={`/editNew/${row.id}`}>
                            <button className="inline-flex items-center px-3 py-2 text-sm text-white rounded-lg bg-yellow-400 hover:bg-yellow-800" title="Змінити дані">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
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
        setActiveNews({id, is_active}).then(() => {
            newsList().then((result) => setNews_cms(result));
        });
    };

    const [news_cms, setNews_cms] = useState([]);
    useEffect(() => {
        newsList().then((result) => setNews_cms(result));
    }, []);

    const destroy = async (id) => {
        const confirmMessage = `Ви впевнені, що хочете видалити новину?`;
        if (!window.confirm(confirmMessage)) {
            return;
        }
        try {
            await newoneDelete(id).then(() => {
                newsList().then((result) => setNews_cms(result));
            });
        } catch (error) {
            console.error('Місце для знищення помилок', error);
        }
    };


    return (
        <div className="">
            <NavLink to="/createNew" type="button"
                     className="mt-4 mb-4 inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-400 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">
                Додати новину
            </NavLink>
            <Grid columns={columns} rows={news_cms}/>
            {/*<div className="w-3/4 mx-auto text-[#2f4a69] font-[Roboto] text-xl my-3 mb-8">*/}
            {/*    <h1 className="text-center"><strong>Увага!</strong></h1><br/>*/}
            {/*    <h1 className="text-center"><strong>Про заборону добування (вилову) водних біоресурсів:</strong>*/}
            {/*    </h1>*/}
            {/*    <p className="indent-8 text-center"><br/>р. Південний Буг* - від впадання у Бузький лиман до с.*/}
            {/*        Голоскове - з 5 квітня до 25 травня;</p>*/}
            {/*    <p>&nbsp;</p>*/}
            {/*    <p className="text-blue-500 text-center"><a*/}
            {/*        href="https://zakon.rada.gov.ua/laws/show/z1412-22#Text">посилання на НАКАЗ(додаток 3,частина*/}
            {/*        II)</a></p>*/}
            {/*    <p>&nbsp;</p>*/}

            {/*</div>*/}
        </div>
    );
};

export default News;