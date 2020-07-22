import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Friend from './friend'

const FriendsList = props => {
    

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                props.setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            {props.friends.map(friend => {
                return(
                    <Friend key={friend.id} friend={friend} />
                )   
            })}
        </div>
    )
}

export default FriendsList