import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.post('http://localhost:8000/api/auth/logout', {}, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(response => {
                    localStorage.removeItem('token'); // Удаляем токен из localStorage
                    alert(response.data.message);
                    navigate('/'); // Перенаправляем на страницу логина
                })
                .catch(error => {
                    alert('Logout failed');
                    console.error(error);
                });
        }
    }, []);

    return (
        <div>
            Logging out...
        </div>
    );
}

export default Logout;
