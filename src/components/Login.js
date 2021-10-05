import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Login = () => {

    const usuario = {
        id: 32432432,
        name: 'Gerson Benito',
        email: 'gersonbenito4@gmail.com'
    }

    const { setUser } = useContext( Context );

    return (
        <div className='p-3' >
        
            <button 
                className="btn btn-outline-info"
                onClick={()=> setUser(usuario) }
            >
                Login
            </button>

        </div>
    )
}
