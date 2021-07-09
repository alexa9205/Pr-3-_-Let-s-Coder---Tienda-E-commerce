import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email: '', password: ''
    })

    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })

            localStorage.setItem('firstLogin', true)
            setSuccessMessage("Usuario logueado correctamente!")

            setTimeout(() => {
                window.location.href = "/"
            }, 3000);

        } catch (err) {
            setErrorMessage(err.response.data.msg)
            setTimeout(() => {
                window.location.href = "/login"
            }, 2000);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                    placeholder="Introduzca su e-mail" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                    placeholder="Introduzca su contraseña" value={user.password} onChange={onChangeInput} />

                <div className="msg_ok" style={{display: successMessage ? 'block' : 'none'}} role="alert">
                    {successMessage}
                </div>

                <div className="msg_alert" style={{display: errorMessage ? 'block' : 'none'}} role="alert">
                    {errorMessage}
                </div>

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
