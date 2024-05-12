import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-row items-center shadow-lg overflow-hidden rounded-lg bg-white">
                <form className="block p-6">
                {/*@submit.prevent="signIn">*/}
                <h1 className="text-center">Увійти до Demetra CMS</h1>
                    <label htmlFor="email">email</label>
                    <input className="py-2 w-full" type="email" name="email" placeholder="email" required/>
                    <label htmlFor="password">email</label>
                    <input className="py-2 w-full" type="password" name="password" placeholder="password" required/>
                <div className="flex justify-end pt-2">
                    <button>submit</button>
                </div>
            </form>
        </div>
</div>
)
    ;
};

export default Login;