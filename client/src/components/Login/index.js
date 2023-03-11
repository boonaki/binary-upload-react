import React, {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === '' || password === ''){
            setErrors(['Please fill in the fields'])
        }else{
            fetch('/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(res => navigate('/profile'))
                .catch(err => console.error(err))
        }
    }

    return (
        <main className="container">
            <div className="row justify-content-center">
                <section className="col-6 mt-5">
                {errors.map((err,i) => {
                    return <span key="{i}" className="alert alert-danger">{err}</span>
                })}
                <form className="mt-4">
                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={handleEmail}
                    ></input>
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        onChange={handlePassword}
                    ></input>
                    </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login