import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const initialFormValues = {
        username: '',
        password: ''
    }

    const initialErrors = ''

    const { push } = useHistory()

    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)

    const handleChanges = event => {
        setFormValues({
            ...formValues, 
            [event.target.name]: event.target.value
        })
        // console.log(formValues)
    }

    const onSubmit = event => {
        event.preventDefault()

        axios.post('http://localhost:5000/api/login', formValues)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                push('/friends')
            })
            .catch(err => {
                // console.log(err)
                setErrors(err.data.error)
            })
    }

    return(
        <form onSubmit={onSubmit} >
            {errors}
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