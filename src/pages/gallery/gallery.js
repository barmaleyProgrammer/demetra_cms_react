import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Places from "./places";
import { placeList, destroyPlace } from "../../api";
import Loader from "../../components/Loader/loader";

const Gallery = () => {
    const { id } = useParams();
    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (id) {
            const place = places.find((item) => item.id == id);
            setPlace(place);
        } else {
            setPlace(null);
        }
    }, [id]);

    const getData = () => {
        setLoading(true);
        return placeList().then((result) => {
            setPlaces(result);
            setLoading(false);
        });
    }

    const destroy = async (id) => {
        console.log('destroy', id);
        if (!window.confirm('sdfhgh')) {
            return;
        }
        setLoading(true);
        await destroyPlace(id);
        await getData();
        setLoading(false);
    };

    // const edit = (payload) => {
    //     console.log('edit', id);
    //     getData();
    // }

    return (
         loading ? <Loader /> :
                <Places places={places} destroy={destroy} />

    )


};

export default Gallery;