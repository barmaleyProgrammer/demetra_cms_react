import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:8000/api/auth/whoami', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    alert('Failed to fetch user data');
                });
        }
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
