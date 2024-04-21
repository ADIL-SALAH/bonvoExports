"use client"

import React from 'react'
import { Formik, } from "formik";
import { notify } from '@/components/Toaster';
import toast, { Toaster } from 'react-hot-toast';

function page() {

    const inputField = [
        {
            name: 'Name',
            type: 'text'
        },
        {
            name: 'Company Name',
            type: 'text'
        },
        {
            name: 'Email',
            type: 'email'
        },
        {
            name: 'Phone',
            type: 'text'
        },
        {
            name: 'Message',
            type: 'textArea'
        }
    ]

    return (
        <div className='min-h-screen flex justify-center items-center mt-16 bg-transparent'>
            <Toaster />
            <div className='w-[90%]'>
                {/* <div className="flex justify-center items-center  "> */}
                <div className=" my-4 lg:px-20 flex md:flex-row flex-col md:space-x-6 space-y-10">
                    <Formik
                        initialValues={
                            {
                                name: '',
                                'company name': '',
                                email: '',
                                phone: '',
                                message: ''
                            }
                        }
                        validate={(values) => {
                            console.log(values, '>>>>>>>>>>')
                            let errors = {}
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

                            if (!values.name) {
                                errors.name = 'Name is Required'
                            }
                            else if (values.name.length < 3) {
                                errors.name = 'Name should be min 4 length'
                            }
                            if (!values['company name']) {
                                errors['company name'] = 'Company Name is Required'
                            }
                            if (!values.email) {
                                errors.email = 'Email is Required'
                            }
                            else if (!emailRegex.test(values.email)) {
                                errors.email = 'Enter a Valid Email'
                            }
                            if (!values.phone) {
                                errors.phone = 'Phone is Required'
                            }
                            else if (phoneRegex.test(values.phone)) {
                                errors.phone = 'Enter a Valid Phone'
                            }
                            if (!values.message) {
                                errors.message = 'Type Your Queries here'
                            }
                            console.log(errors, '*********')
                            return errors
                        }}
                        onSubmit={(values) => {
                            console.log(values, '???????????');
                            fetch('https://sheetdb.io/api/v1/wqw17vegu5whz', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    data:
                                    {
                                        'NAME': values.name,
                                        'COMPANY NAME': values['company name'],
                                        'EMAIL': values.email,
                                        'PHONE': values.phone,
                                        'MESSAGE': values.message
                                    }

                                })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    console.log(data);
                                    // notify({ type: true, message: 'Data submitted successfully' });
                                    toast.success('Data submitted successfully')
                                })
                                .catch(error => {
                                    console.error(error);
                                    // notify({ type: false, message: 'Error occurred while submitting data' });
                                    toast.error('Error occurred while submitting data')
                                });
                        }}

                    >
                        {({ values, handleChange, handleSubmit, errors }) => (
                            <form onSubmit={handleSubmit} className="p-10 rounded-2xl shadow-2xl lg:w-2/3">
                                <div className="flex">
                                    <h1 className="font-bold uppercase md:text-5xl text-[#fbb500] font-mono">Connect <br /> With Us</h1>
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    {
                                        inputField.map((item, index) => (
                                            item.type !== 'textArea' ?
                                                // <input key={index} className="w-full bg-gray-100 font-serif text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                //     type={item.type} placeholder={item.name.toLowerCase()} name={item.name} defaultValue={values.name} onChange={handleChange} />
                                                <div key={index}>
                                                    <input
                                                        className="w-full bg-gray-100 font-serif text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        placeholder={item.name}
                                                        name={item.name.toLowerCase()}
                                                        // value={values.name}
                                                        onChange={handleChange}
                                                    />
                                                    <span className='text-red-600 text-xs'>
                                                        {errors[item.name.toLocaleLowerCase()] ? errors[item.name.toLowerCase()] : null}
                                                    </span>
                                                </div>

                                                : null
                                        ))
                                    }

                                </div>

                                <div className="my-4">
                                    <textarea
                                        placeholder="Message*"
                                        className="w-full h-32 font-serif bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    <span className='text-red-600 text-xs'>
                                        {errors.message ? errors.message : null}
                                    </span>
                                </div>

                                <div className="my-2 w-1/2 lg:w-1/4">
                                    <button type="submit" className="uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                    <div className='lg:w-1/3 flex justify-center items-center bg-black p-10 rounded-2xl shadow-2xl card  '>
                        <div>

                            <h2 className='text-lg '>
                                CONTACT DETAILS
                            </h2>
                            <hr className='mt-5 mb-12' />
                            <ul className='space-y-10 '>
                                <li className='space-y-3'>
                                    <h4 className=''>Visit Office:</h4>
                                    <p >16/110 A.M.S.V Building, Armenian Street, Chennai - 600 001. India</p>
                                </li>
                                <li className='space-y-3'>
                                    <h4 className='text-xs'>Phone:</h4>
                                    <p >044-47796783</p>
                                </li>
                                <li className='space-y-3'>
                                    <h4 className='text-xs'>Email:</h4>
                                    <p >enquiry@spazeoimpex.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* </div> */}



            </div>


        </div>
    )
}

export default page