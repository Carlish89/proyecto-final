import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/Provider'
import "../styles/perfil.css"

const Perfil = () => {
    const { user } = useContext(Context)
    return (
        <div className='perfil'>
            <div className='card-perfil bg-body-secondary'>
                <div className='perfil-img' style={{ backgroundImage: `url('${user.profileImage}') ` }}>

                </div>
                <div className='perf-desc'>
                    <div className='perf-name'>
                        <p>Nombre : { " "}{user.name}</p>
                        <p>Apellido : {" "}{user.lastname}</p>
                    </div>
                    <div perf-email>
                        <p>Email : {" "}{user.email}</p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Perfil