import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import style from '../Register/Register.module.css';

export default function Register() {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        boughtProducts: [],
    }, onRegisterSubmit);

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Register</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="POST" onSubmit={onSubmit}>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                    <label className={style.label} htmlFor="userName">Name</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            value={values.username}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                    <label className={style.label} htmlFor="email">Email address</label>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                    <label className={style.label} htmlFor="password">Password</label>

                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                    <label className={style.label} htmlFor="re-Pass">Repeat password</label>

                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Repeat-password"
                                            value={values.confirmPassword}
                                            onChange={changeHandler}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <button type="submit">send</button>
                                    </div>
                                    <span>
                                        If you have profile click{' '}
                                        <Link to="/login">here</Link>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
