import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css"

function CreateTask() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function handleSubmit() {
        // console.log(title)
        // console.log(description)

        fetch("http://127.0.0.1:8000/tasks/create/",{
            method:'POST',

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, description: description})
        })
        .then(response => response.json())
        .then(data => {console.log(data)});
        navigate('/')
    }

    return (
        <>
            <Navbar />

            <div className="form-container">
                <div className="form-card">

                    <h1>Create Task</h1>

                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <br /><br />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <br /><br />

                    <button onClick={handleSubmit}>
                        Create Task
                    </button>

                    <hr />

                    <h3>Current State</h3>

                    <p>Title: {title}</p>
                    <p>Description: {description}</p>

                </div>
            </div>
            
        </>
    );
}

export default CreateTask;