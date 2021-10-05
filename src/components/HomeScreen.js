import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const HomeScreen = () => {

    const { user } = useContext( Context );
    console.log(user);

    return (
        <div>
            {JSON.stringify(user, null, 3)}
        </div>
    )
}
