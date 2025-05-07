import React from 'react';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value 
        console.log(email ,password);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <form onSubmit={handleLogin} className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <input className='btn btn-primary' type="submit" value={'login'} />
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;