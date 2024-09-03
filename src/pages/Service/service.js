import { NavLink } from 'react-router-dom';
import Grid from "../../components/grid";
const Service = ({service, destroy}) => {

    const columns = [
        {
            name: 'id',
            title: '#',
            render: (row, index) => {
                return (<>{index + 1}</>);
            },
        },
        {
            name: 'name',
            title: 'Назва блока',
        },
        {
            name: 'description',
            title: 'Опис',
            render: (row) => {
                return (<p className="text-wrap" dangerouslySetInnerHTML={{__html: row.description}}></p>);
            },
        },
        {
            name: 'actions',
            title: 'ДІЇ',
            render: (row) => {
                return (
                    <div className="inline-flex space-x-1">
                        <NavLink to={`/editService/${row.id}`}>
                            <button
                                className="inline-flex items-center px-3 py-2 text-sm text-white rounded-lg bg-blue-300 hover:bg-blue-50"
                                title="Поміняти дані">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                    <path fillRule="evenodd"
                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
                                </svg>
                            </button>
                        </NavLink>
                    </div>
                );
            },
        }
    ];


    return (
        <div>
            <div className="flex justify-between">
                <h2 className="pt-3 font-medium text-2xl mb-3">Послуги</h2>
            </div>
            <Grid columns={columns} rows={service} />
        </div>
    );
};

export default Service;