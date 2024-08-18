import React from 'react';
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/profile';

    const onSubmit = data => {
        axios.post('http://localhost:8000/api/auth/login', data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                navigate(from); // Перенаправление на исходную страницу после успешного логина
            })
            .catch(error => {
                alert('Login failed: ' + error.response.data.message);
            });
    };


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-row items-center shadow-lg overflow-hidden rounded-lg bg-white">
                <form className="block p-6" onSubmit={handleSubmit(onSubmit)}>
                    {/*@submit.prevent="signIn">*/}
                    <h1 className="text-center">Увійти до Demetra CMS</h1>
                    <label htmlFor="email">email</label>
                    {/*<input className="py-2 w-full" type="email" name="email" placeholder="email" required/>*/}
                    <input className="py-2 w-full" {...register('email')} placeholder="Email"/>
                    <label htmlFor="password">email</label>
                    {/*<input className="py-2 w-full" type="password" name="password" placeholder="password" required/>*/}
                    <input className="py-2 w-full" {...register('password')} type="password" placeholder="Password"/>
                    <div className="flex justify-end pt-2">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                </form>
            </div>
        </div>
    )
        ;
};

export default Login;