import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLoginRedirect = () => {
        navigate('/', { state: { from: location } });
    };

    if (!isAuthenticated) {
        return (
            <div>
                <h2>Доступ до цієї сторінки обмежен</h2>

                <p>Ви повинні <span onClick={handleLoginRedirect}
                                     style={{color: 'blue', cursor: 'pointer'}}>увійти</span> , щоб переглянути цю сторінку.</p>
            </div>
        );
    }
        return children;
    }
    export default PrivateRoute;
