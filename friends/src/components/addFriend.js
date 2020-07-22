import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const AddFriend = props => {
    const initialFormValues = {
        name: '',
        age: '',
        email: ''
    }

    const [formValues, setFormValues] = useState(initialFormValues)
    const { push } = useHistory()

    const onChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault()

        axiosWithAuth()
            .post('/api/friends', formValues)
            .then(res => {
                console.log('Add friend response', res)
                props.setFriends(res.data)
                push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return(
        <form onSubmit={onSubmit}>
            <label>
                Name:&nbsp;
                <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={onChange}
                />
            </label>
            <label>
                Age:&nbsp;
                <input 
                    type='text'
                    name='age'
                    value={formValues.age}
                    onChange={onChange}
                />
            </label>
            <label>
                Email:&nbsp;
                <input 
                    type='text'
                    name='email'
                    value={formValues.email}
                    onChange={onChange}
                />
            </label>
            <button>Add a Friend</button>
        </form>
    )
}

export default AddFriend