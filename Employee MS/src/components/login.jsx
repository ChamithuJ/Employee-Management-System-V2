import React from "react";
import './style.css';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({  
        username: '',  
        password: ''  
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/login')
        .then(result => console.log(result))
        .catch(err => console.log(err)) 
    }

    return (
        <div className='loginpage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Log in</h2>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => setValues({...values, email : e.target.value}) } className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => setValues({...values, password : e.target.value}) } className="form-control" />
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary login-button">Login</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login;
