import React from 'react';
import { useState } from 'react';

const UserForm = ({ sendUser }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [date, setDate] = useState('')
    const [userObj, setUserObj] = useState({})

    const packageUser = (e) => {
        e.preventDefault()

        if (date) {
            const package1 = {
            
                "email": email,
                "password": password,
                "first_name": firstName,
                "last_name": lastName,
                "birthday": date
            }
            setUserObj(package1)
        }else{
            const package1 = {
            
                "email": email,
                "password": password,
                "first_name": firstName,
                "last_name": lastName,
                "birthday": '0000-00-00'
            }
        }
         
         
    }
    
    sendUser(userObj)
    return (
        <div>
            <form onSubmit={ packageUser }>
                <label htmlFor="email">email:</label>
                <input type="email" id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">contraseña:</label>
                <input type="password" id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

                <label htmlFor="first-name">nombre:</label>
                <input type="text" id='first-name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                />

                <label htmlFor="last_name">apellido:</label>
                <input type="text" id='last_name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                />

                <label htmlFor="date">fecha de nacimiento:</label>
                <input type="date" id='date'
                value={date}
                onChange={e => setDate(e.target.value.split('/').join('-'))}
                />

                <button type='submit'>crear</button>
            </form>
        </div>
    );
};

export default UserForm;