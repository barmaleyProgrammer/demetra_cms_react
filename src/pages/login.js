import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/profile';

    const onSubmit = async data => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', data);
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate(from); // Перенаправление на исходную страницу после успешного логина
        } catch (error) {
            if (error.response) {
                // Обработка ошибки 401 с переводом на украинский
                if (error.response.status === 401) {
                    alert('Помилка входу: Неправильні облікові дані');
                } else {
                    // Обработка других ошибок
                    alert('Помилка входу: ' + (error.response.data.message || 'Невідома помилка'));
                }
            } else if (error.request) {
                // Запрос был сделан, но ответа не было
                alert('Помилка входу: Сервер не відповідає');
            } else {
                // Что-то произошло при настройке запроса
                alert('Помилка входу: ' + error.message);
            }
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-row items-center shadow-lg overflow-hidden rounded-lg bg-white">
                <form className="block p-6" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center">Увійти до Demetra CMS</h1>

                    <label htmlFor="email">Email</label>
                    <input
                        className={`py-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                        {...register('email', { required: 'Email обов\'язковий для введення' })}
                        placeholder="Email"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <label htmlFor="password">Password</label>
                    <input
                        className={`py-2 w-full ${errors.password ? 'border-red-500' : ''}`}
                        {...register('password', { required: 'Пароль обов\'язковий для введення' })}
                        type="password"
                        placeholder="Пароль"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <div className="flex justify-end pt-2">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Увійти</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
