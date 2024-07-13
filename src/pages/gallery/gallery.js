import { useEffect, useState } from 'react';
import Places from "./places";
import { placeList, destroyPlace } from "../../api";
import Loader from "../../components/Loader/loader";

const Gallery = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const result = await placeList();
            setPlaces(result);
        } catch (error) {
            console.error('Error fetching places', error);
        } finally {
            setLoading(false);
        }
    }

    const destroy = async (id) => {
        const place = places.find((item) => item.id == id);
        if (!place) {
            console.error('Місце не знайдено');
            return;
        }

        const confirmMessage = `Ви впевнені, що хочете видалити "${place.name}"?`;
        if (!window.confirm(confirmMessage)) {
            return;
        }

        try {
            setLoading(true);
            await destroyPlace(id);
            await getData();
        } catch (error) {
            console.error('Місце для знищення помилок', error);
        } finally {
            setLoading(false);
        }
    };

    return (
         loading ? <Loader /> : <Places places={places} destroy={destroy} />
    )
};

export default Gallery;