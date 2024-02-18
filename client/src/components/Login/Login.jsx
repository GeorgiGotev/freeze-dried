import { Link } from 'react-router-dom';
import { useState } from "react";

import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import style from '../Login/Login.module.css'

export default function Login () {
    const { onLoginSubmit } = useAuthContext();
    const [passwordError, setPasswordError] = useState('');
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: '',
            password: '',
        },
        onLoginSubmit
    );

    const passwordValidator = () => {
        if (values.password.length < 6) {
          setPasswordError('Password should be at least 6 characters')
        } else {
          setPasswordError('')
        }
      }

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Login</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="POST" onSubmit={onSubmit}>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <label className={style.label} htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            placeholder="*******@abv.bg"
                                            name='email'
                                            value={values.email}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                    <label className={style.label} htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            placeholder="********"
                                            name='password'
                                            value={values.password}
                                            onChange={changeHandler}
                                            onBlur={passwordValidator}
                                        />
                                        {setPasswordError && <p className={style.errors}>{passwordError}</p>}
                                    </div>

                                    <div className="mt-5">
                                        <button type="submit">Login</button>
                                    </div>
                                    <span>If you don't have profile click <Link to="/register">Register here</Link></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
