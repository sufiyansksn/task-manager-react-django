import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin() {
        fetch('http://127.0.0.1:8000/accounts/token/',{

            method: 'POST',

            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.message === "Login Successful") {
                navigate("/");
            }
        });
    }

    return (
        <>
        <Navbar />

        <div className="form-container">
            <div className="form-card">

                <h1 className="form-title">Login</h1>

                <label className="form-lable">
                    Username
                </label>

                <input
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />


                <label className="form-lable">
                    Password
                </label>

                <input 
                    className="form-input"
                    type="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />

                <button 
                    className="form-btn"
                    onClick={handleLogin}
                >
                    Login

                </button>
            </div>
        </div>
        </>
    );
}

export default Login;