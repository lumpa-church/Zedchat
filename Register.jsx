
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/auth/register', form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" />
            <button type="submit">Register</button>
        </form>
    );
}
