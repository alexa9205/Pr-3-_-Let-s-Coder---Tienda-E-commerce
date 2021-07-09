import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })

    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/register', { ...user })

            localStorage.setItem('firstLogin', true)

            setSuccessMessage("Te has registrado correctamente!")

            setTimeout(() => {
                window.location.href = "/"
            }, 3000);
        } catch (err) {
            setErrorMessage(err.response.data.msg)
            setTimeout(() => {
                window.location.href = "/register"
            }, 2000);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                    placeholder="Introduzca su nombre y apellidos" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                    placeholder="Introduzca su e-mail" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Introduzca su contraseña" value={user.password} onChange={onChangeInput} />

                <div className="msg_ok" style={{ display: successMessage ? 'block' : 'none' }} role="alert">
                    {successMessage}
                </div>

                <div className="msg_alert" style={{ display: errorMessage ? 'block' : 'none' }} role="alert">
                    {errorMessage}
                </div>

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register