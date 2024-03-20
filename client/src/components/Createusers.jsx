import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


const options = [
    { value: "datascience", label: 'Data Science' },
    { value: "python", label: 'Python A to Z' },
    { value: "dsa", label: 'DSA in Python' },
    { value: "ai", label: 'AI' },
    { value: "machinelearning", label: 'Machine Learning' },
    { value: "UI/UX", label: 'UI/UX Designing' },
    { value: "webdevelopment", label: 'Web Development' }
];

const Createusers = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState({
        username: '',
        email: '',
        password: '',
        coursename: '',
        isAdmin: '',
    });
    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleChange(e) {
        const { value, name } = e.target;
        setUsers(prevUsers => ({
            ...prevUsers,
            [name]: value
        }));
    }

    function handleOptions(selectedOption) {
        const selectedValues = selectedOption.map(option => option.value);
        setSelectedOptions(selectedOption);
        setUsers(prevUsers => ({
            ...prevUsers,
            coursename: selectedValues
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/userlist')
        console.log(users);
        // Submit data to API or perform other actions
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 border border-gray-300 rounded-md shadow-lg mt-8">
                <h1 className="text-2xl font-semibold text-center mb-6">Add User</h1>
                <div className="flex mb-6">
                    <div className="w-1/2 mr-4">
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            value={users.username}
                            onChange={handleChange}
                            placeholder='Username'
                            name='username'
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-4"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            value={users.email}
                            onChange={handleChange}
                            placeholder='Email'
                            name='email'
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-4"
                            required
                        />
                    </div>
                </div>
                <div className="flex mb-6">
                    <div className="w-1/2 mr-4">
                        <label htmlFor='password'>Create Password</label>
                        <input
                            type='password'
                            value={users.password}
                            onChange={handleChange}
                            placeholder='Password'
                            name='password'
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-2 px-4"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor='courses'>Select Courses</label>
                        <Select
                            options={options}
                            value={selectedOptions}
                            onChange={handleOptions}
                            isMulti={true}
                            className="block w-full"
                        />
                    </div>
                </div>
                <fieldset className="mb-6">
                    <legend className="text-lg font-medium">Make Admin?</legend>
                    <input
                        type="radio"
                        id="true"
                        name="isAdmin"
                        className="mr-2"
                        onChange={() => setUsers(prevUsers => ({ ...prevUsers, isAdmin: true }))}
                    />
                    <label htmlFor="true"> Yes</label>
                    <br />
                    <input
                        type="radio"
                        id="false"
                        name="isAdmin"
                        className="mr-2"
                        onChange={() => setUsers(prevUsers => ({ ...prevUsers, isAdmin: false }))}
                    />
                    <label htmlFor="false"> No</label>
                </fieldset>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-orange hover:bg-orangeshade focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Createusers;
