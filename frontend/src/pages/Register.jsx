import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleRegister() {
        fetch('task-manager-react-django.onrender.com/accounts/register/',{

            method: 'POST',

            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data.message === "User Registered Successfully"){
                navigate("login/")
            }
        });
    }


    return (
        <>
        <Navbar />

        <div className="form-container">
            <div className="form-card">

                <h1 className="form-title">Register</h1>

                <lable className="form-lable">
                    Username
                </lable>

                <input
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <lable className="form-lable">
                    Email
                </lable>

                <input
                    className="form-input"
                    type="email"
                    value={email}
                    onChange ={(e) => setEmail(e.target.value)}
                />

                <lable className="form-lable">
                    Password
                </lable>

                <input 
                    className="form-input"
                    type="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />

                <button 
                    className="form-button"
                    onClick={handleRegister}
                >
                    Register

                </button>
            </div>
        </div>
        </>
    );
}

export default Register;
