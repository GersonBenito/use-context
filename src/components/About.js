import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const About = () => {

    const { user, setUser } = useContext( Context );

    const handleClick = () =>{

        setUser({});

    }

    return (
        <div className='p-3' >

            <p>{ JSON.stringify(user, null, 3) }</p>

            <button 
                className="btn btn-outline-success"
                onClick={ handleClick }
            >
                Logout
            </button>
        </div>
    )
}
