import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Удаляем токен из localStorage
        localStorage.removeItem('accessToken');
        // Перенаправляем пользователя на главную страницу или страницу логина
        navigate('/');
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const endPoint = (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000/api' : `${window.location.protocol}//api.demetra.fish/api`;
        if (token) {
            axios.get(`${endPoint}/auth/whoami`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    alert('Не вдалося отримати дані користувача, авторизуйтеся ще раз.');
                    handleLogout();
                });
        }
    }, []);

    if (!user) return <div>Loading...</div>;


    return (
        <div>
            <h2>Вітаю, {user.name}</h2>
            <p>Email: {user.email}</p>
            <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Вийти
            </button>
        </div>
    );
}

export default Profile;
