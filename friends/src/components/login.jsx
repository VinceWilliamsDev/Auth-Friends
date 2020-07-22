import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const initialFormValues = {
        username: '',
        password: ''
    }
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChanges = event => {
        setFormValues({
            ...formValues, 
            [event.name]: event.value
        })
    }

    const onSubmit = event => {
        event.preventDefault()

        axios.post('https://localhost:5000/api/login', formValues)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <form onSubmit={onSubmit} >
            <label>
                Username:&nbsp;
                <input 
                    type="text" 
                    name="username" 
                    value={formValues.username}
                    onChange={handleChanges}
                />
            </label>
            
            <label>
                Password:&nbsp;
                <input 
                    type="password" 
                    name="password"
                    value={formValues.password}
                    onChange={handleChanges}
                />
            </label>
            <button>Login</button>
        </form>
    )
}

export default Login