import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import styles from '../Register/Register.module.css';

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const { values, changeHandler, onSubmit } = useForm(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            boughtProducts: [],
        },
        onRegisterSubmit
    );

    const passwordValidator = () => {
        if (values.password.length < 6) {
            setErrors((state) => ({
                ...state,
                password: 'Password should be at least 6 characters',
            }));
        } else {
            if (errors.password) {
                setErrors((state) => ({ ...state, password: '' }));
            }
        }
    };

    const rePasswordValidator = () => {
        if (values.password !== values.confirmPassword) {
          setErrors((state) => ({
            ...state,
            confirmPassword: "Passwords don't match!",
          }));
        } else {
          if (errors.confirmPassword) {
            setErrors((state) => ({ ...state, confirmPassword: "" }));
          }
        }
        if (values.confirmPassword.length < 6) {
          setErrors((state) => ({
            ...state,
            confirmPassword: "Repeat password should be at least 6 characters",
          }));
        } else {
          if (errors.confirmPassword) {
            setErrors((state) => ({ ...state, confirmPassword: "" }));
          }
        }
      };

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
                                        <label
                                            className={styles.label}
                                            htmlFor="userName"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            value={values.username}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className={styles.label}
                                            htmlFor="email"
                                        >
                                            Email address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className={styles.label}
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={changeHandler}
                                            onBlur={passwordValidator}
                                        />
                                        {errors.password && (
                                            <p className={styles.errors}>
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            className={styles.label}
                                            htmlFor="re-Pass"
                                        >
                                            Repeat password
                                        </label>

                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Repeat-password"
                                            value={values.confirmPassword}
                                            onChange={changeHandler}
                                            onBlur={rePasswordValidator}
                                        />
                                        {errors.confirmPassword && (
                                            <p className={styles.errors}>
                                                {errors.confirmPassword}
                                            </p>
                                        )}
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
