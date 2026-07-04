import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css"

function EditTask(){

    const { id } = useParams();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate();
    function handleEdit() {
        // console.log(title)
        // console.log(description)

        fetch(`task-manager-react-django.onrender.com/tasks/${id}`,{
            method:'PUT',

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, description: description})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            navigate("/");
        });
    }

    useEffect(() => {

        fetch(`task-manager-react-django.onrender.com/tasks/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTitle(data.title);
                setDescription(data.description);

            });
    }, []);

    return (
        <>
            <div>
                <h1>Edit Task</h1>

                <input 
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}                
                />

                <br /><br />

                <textarea
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                />

                <br /><br />
                
                <button onClick={handleEdit}>
                    Edit Task
                </button>
            </div>
        </>
    );
    


}

export default EditTask;
