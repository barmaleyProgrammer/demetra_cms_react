import { useState, useEffect } from 'react';
import { serviceList } from "../../api";
import Service from './service';
import Loader from "../../components/Loader/loader";

const MainService = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     getData();
    // }, []);
    //
    // const getData = () => {
    //     setLoading(true);
    //     return serviceList().then((result) => {
    //         console.log(result);
    //         setService(result);
    //         setLoading(false);
    //     });
    // }

    return (
        loading ? <Loader /> : <Service service={service}/>
    )

};
export default MainService;