import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser =result.user
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('afsjakls');
                reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
        })
    };


    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">sign up now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">name</label>
                                    <input type="text"  {...register("name", { required: true })} name='name' className="input" placeholder="name" />
                                    {errors.name && <span>This field is required</span>}
                                    <label className="label">photo URL</label>
                                    <input type="text"  {...register("photoURL", { required: true })}  className="input" placeholder="photo UR" />
                                    {errors.photoURL && <span>photoURL is required</span>}
                                    <label className="label">Email</label>
                                    <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="Email" />
                                    {errors.email && <span>This field is required</span>}
                                    <label className="label">Password</label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name='password' className="input" placeholder="Password" />
                                    {errors.password?.type === 'required' && <p className='text-red-600'>password must be less then 20 character </p>}
                                    {errors.password?.type === 'minlength' && <p className='text-red-600'>password must be 6 character </p>}
                                    {errors.password?.type === 'mexLength' && <p className='text-red-600'>password must be less then 20 character </p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-600'>password must be one uppercase one lowercase on special number on spacial  character </p>}
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <input className="btn btn-neutral mt-4" type="submit" value="Sign up" />
                                </fieldset>
                            </form>
                            <p><small>AL ready have an account<Link to={'/login'}>Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;