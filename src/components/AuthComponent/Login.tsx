import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormikValues, useFormik } from 'formik';
import { IconButton, InputAdornment, TextField } from '@mui/material/';
import PersonIcon from '@mui/icons-material/Person';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginyupschema } from '../../schemas/FormSchemas';
import { LoginModal } from '../../modals/loginModal';
function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);

    const initialValue: LoginModal = {
        email: '',
        password: '',
        rememberMe: false,
    }
    const submit = (value: LoginModal, action: any) => {
        console.log(value)
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValue,
        validationSchema: loginyupschema,
        onSubmit: submit
    });




    return (
        <div>
            <button>GetAllCategories</button>

            <section className="login footer-padding">
                <div className="container">
                    <div className="login-section">
                        <div className="review-form">
                            <form onSubmit={handleSubmit}>
                                <h5 className="comment-title">Log In</h5>
                                <div className="review-inner-form ">
                                    <div className="review-form-name">
                                        <TextField id="email" name="email" onChange={handleChange} label="Email" type='text' variant='outlined' fullWidth={true} value={values.email} slotProps={{
                                            input: {
                                                startAdornment: <InputAdornment position="start"><PersonIcon style={{ fontSize: "20" }}></PersonIcon></InputAdornment>,
                                            },
                                        }} ></TextField>
                                        {errors.email && <p className='errorstyle'>{errors.email}</p>}
                                    </div>
                                    <div className="review-form-name">
                                        <TextField fullWidth={true} onChange={handleChange} id="password" name='password' label="Password" variant='outlined' value={values.password} type={showPassword ? 'text' : 'password'} slotProps={{
                                            input: {
                                                endAdornment: <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility style={{ fontSize: "20" }} /> : <VisibilityOff style={{ fontSize: "20" }} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        }}></TextField>
                                        {errors.password && <p className='errorstyle'>{errors.password}</p>}
                                    </div>
                                    <div className="review-form-name checkbox">
                                        <div className="checkbox-item">
                                            <input id='rememberMe' name='rememberMe' type="checkbox" checked={values.rememberMe} onChange={handleChange} />

                                            <span className="address">
                                                Remember Me</span>
                                        </div>

                                        <div className="forget-pass">
                                            <p>Forgot password?</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-btn text-center">
                                    <button type='submit' className="shop-btn">Log In</button>
                                    <span className="shop-account">Dont't have an account ?<Link to={"/register"}>Sign Up
                                        Free</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login