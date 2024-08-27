import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Form, FormikValues, useFormik } from 'formik';

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterModal } from '../../modals/registerModal';
import PersonIcon from '@mui/icons-material/Person';
import { registeryupschema } from '../../schemas/FormSchemas';

import { Visibility, VisibilityOff, LocalPhone, MailOutline } from '@mui/icons-material';


function Register() {
    const initialValue: RegisterModal = {
        username: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        surname: '',
        term: false,
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);
    const submit = (value: RegisterModal, action: any) => {
        console.log(value);
    }
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValue,
        validationSchema: registeryupschema,
        onSubmit: submit
    });

    return (
        <div>
            <section className="login account footer-padding">
                <div className="container">
                    <div className="login-section account-section">
                        <div className="review-form">
                            <form onSubmit={handleSubmit}>
                                <h5 className="comment-title">Create Account</h5>
                                <div className=" account-inner-form">
                                    <div className="review-form-name">
                                        <TextField fullWidth={true} id='name' name='name' onChange={handleChange} label='Name' type='text' variant='outlined' value={values.name} slotProps={{
                                            input: {
                                                startAdornment: <InputAdornment position="start"><PersonIcon style={{ fontSize: "20" }}></PersonIcon></InputAdornment>,
                                            },
                                        }} ></TextField>
                                        {errors.name && <p className='errorstyle'>{errors.name}</p>}
                                    </div>
                                    <div className="review-form-name">
                                        <TextField fullWidth={true} id='surname' name='surname' onChange={handleChange} label='Surname' type='text' value={values.surname} slotProps={{
                                            input: {
                                                startAdornment: <InputAdornment position="start"><PersonIcon style={{ fontSize: "20" }}></PersonIcon></InputAdornment>,
                                            },
                                        }} ></TextField>
                                        {errors.surname && <p className='errorstyle'>{errors.surname}</p>}
                                    </div>
                                </div>
                                <div className=" account-inner-form">
                                    <div className="review-form-name ">
                                        <TextField fullWidth={true} id='email' name='email' onChange={handleChange} label='Email' type='text' value={values.email} slotProps={{
                                            input: {
                                                startAdornment: <InputAdornment position="start"><MailOutline style={{ fontSize: "20" }}></MailOutline></InputAdornment>,
                                            },
                                        }} ></TextField>
                                        {errors.email && <p className='errorstyle'>{errors.email}</p>}
                                    </div>
                                    <div className="review-form-name  ">
                                        <TextField fullWidth={true} id='username' name='username' onChange={handleChange} label='UserName' type='text' value={values.username} slotProps={{
                                            input: {
                                                startAdornment: <InputAdornment position="start"><PersonIcon style={{ fontSize: "20" }}></PersonIcon></InputAdornment>,
                                            },
                                        }} ></TextField>
                                        {errors.username && <p className='errorstyle'>{errors.username}</p>}
                                    </div>
                                </div>
                                <div className="review-form-name">
                                    <TextField id='password' name='password' onChange={handleChange} label='Password' type={showPassword ? 'text' : 'password'} fullWidth={true} value={values.password} slotProps={{
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
                                    }} ></TextField>
                                    {errors.password && <p style={{ fontSize: 12, color: "red" }}>{errors.password}</p>}
                                </div>
                                <div className="review-form-name">
                                    <TextField sx={{ marginTop: 2 }} id='phone' name='phone' onChange={handleChange} label='Phone' type='text' fullWidth={true} value={values.phone} slotProps={{
                                        input: {
                                            startAdornment: <InputAdornment position="start"><LocalPhone style={{ fontSize: "20" }}></LocalPhone></InputAdornment>,
                                        },
                                    }} ></TextField>
                                    {errors.phone && <p className='errorstyle'>{errors.phone}</p>}
                                </div>
                                <div className="review-form-name checkbox">
                                    <div className="checkbox-item">
                                        <input id='term' name='term' type="checkbox" checked={values.term} onChange={handleChange} />
                                        <p className="remember">
                                            I agree all terms and condition in <span className="inner-text">ShopUs.</span></p>
                                        {errors.term && <p className='errorstyle'>{errors.term}</p>}

                                    </div>
                                </div>
                                <div className="login-btn text-center">
                                    <button type='submit' className="shop-btn">Create an Account</button>
                                    <span className="shop-account">Already have an account ?<Link to={"/login"}>Log In</Link></span>
                                </div>
                            </form>
                            {/* <div className="review-form-name">
                                <label htmlFor="country" className="form-label">Country*</label>
                                <select id="country" className="form-select">
                                    <option>Choose...</option>
                                    <option>Bangladesh</option>
                                    <option>United States</option>
                                    <option selected>United Kingdom</option>
                                </select>
                            </div>
                            <div className="review-form-name address-form">
                                <label htmlFor="address" className="form-label">Address*</label>
                                <input type="text" id="address" className="form-control" placeholder="Enter your Address" />
                            </div> */}
                            {/* <div className=" account-inner-form city-inner-form">
                                <div className="review-form-name">
                                    <label htmlFor="city" className="form-label">Town / City*</label>
                                    <select id="city" className="form-select">
                                        <option>Choose...</option>
                                        <option>Newyork</option>
                                        <option>Dhaka</option>
                                        <option selected>London</option>
                                    </select>
                                </div>
                                <div className="review-form-name">
                                    <label htmlFor="number" className="form-label">Postcode / ZIP*</label>
                                    <input type="number" id="number" className="form-control" placeholder={"0000"} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register