import React, { createContext, useState, useEffect } from 'react';
import { serviceList } from "../api"; // Импорт функции для получения списка сервисов

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return serviceList().then((result) => {
            setServices(result);
            setLoading(false);
        });
    }, []);

    const updateService = (updatedService) => {
        setServices(prevServices =>
            prevServices.map(service =>
                service.id === updatedService.id ? updatedService : service
            )
        );
    };

    return (
        <ServiceContext.Provider value={{ services, loading, updateService }}>
            {children}
        </ServiceContext.Provider>
    );
};
