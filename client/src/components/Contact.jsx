import React from 'react';
import connect from '../assets/connect.png';
import axios from 'axios';

export default function Contact(){
    const[msg, setMsg] = React.useState('')

    const handleSubmit = (e) => {
        const formEle = document.querySelector('form')
        e.preventDefault();
        const formData = new FormData(formEle) 
        axios.post('https://script.google.com/macros/s/AKfycbw_Ri9r6WuDhyFi1SUGgKzlMEL_KHb8GMvbugyWNY4Tt5515jV2QxOs7nTj-Udg2Wff/exec', formData)
        .then(response => {
            alert('Your message is sent successfully!');
        })
        .catch(error => {
            setMsg(error);
        });
    };
    return(
<div>
    {/* Contact Form */}
    <div className="flex items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-medium leading-tight pt-10 mt-20">
            <span className='text-orange font-bold'>Courses Offered</span>
        </h1>
    </div>
    <div className='flex mt-10 items-center justify-center'>
        <p className="md:text-xl font-medium text-gr leading-relaxed md:text-center md:px-20 px-10 mb-10" style={{ lineHeight: '1.8' }}>
            We would love to hear from you! Contact us for inquiries, partnerships, or any questions you may have.<br/> Reach out to us via the contact form below.
        </p>
    </div>
    <div className="flex justify-center">
        {/* Image */}
        <div className="mt-8 mr-6">
            <img src={connect} alt="Connect" className="max-w-md" />
        </div>
        {/* Contact Form */}
        <div className="ml-6">
            <form onSubmit={handleSubmit} className="form items-center mt-4 mb-10 border rounded-xl border-gray-300 bg-gray-100 p-8">
                <div className="mb-4">
                    <div>
                        <label htmlFor="username" className="font-medium text-subheading text-sm">Username</label>
                        <input
                            type="text"
                            name='Name'
                            className="block w-96 border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="email" className="font-medium text-subheading text-sm">Email Address</label>
                        <input
                            type="email"
                            name='Email'
                            className="block w-96 border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="phone" className="font-medium text-subheading text-sm">Phone Number</label>
                        <input
                            type="phone"
                            name='Phone'
                            className="block w-96 border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="course" className="font-medium text-subheading text-sm">Course Looking for</label>
                        <input
                            type="course"
                            name='CourseRequested'
                            className="block w-96 border border-gray-300 rounded-lg px-4 py-2 mt-1"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-orange hover:bg-orange-200 text-white font-medium py-2 px-8 rounded-3xl focus:outline-none mt-4">Update</button>
                </div>
                {msg && <span>{JSON.stringify(msg.message)}</span>}
            </form>
        </div>
    </div>
</div>

    )
}