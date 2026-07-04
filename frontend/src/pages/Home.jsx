import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import "./Home.css";


function Home() {
    const [tasks, setTasks] = useState([]);
    
    const [search, setSearch] = useState("");


    const totalTasks = tasks.length;
    const CompletedTasks = tasks.filter(task => task.completed).length;
    const PendingTasks = totalTasks - CompletedTasks;

    function toggleComplete(id){
        console.log(id)
        fetch(`task-manager-react-django.onrender.com/tasks/${id}/complete/`,{
                method: "PUT"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setTasks(

                    tasks.map(task => {

                        if (task.id === id){
                            return{
                                ...task,
                                completed: !task.completed
                            };
                        }
                        return task;
                    })
                )
            });
    }

    function deleteTask(id) {
        fetch(
            `http://task-manager-react-django.onrender.com/tasks/delete/${id}/`,
            {
                method: "DELETE"
            }
        )
        .then(response => response.json())
        .then(data => {console.log(data);
            setTasks(
                tasks.filter(task => task.id !== id)
            );
        });
    }   

    useEffect(() => {
        fetch("https://task-manager-react-django.onrender.com/tasks/")
        .then(response => response.json())
        .then(data => { setTasks(data); });
    }, []);

    
    return (
        <>
        <div className="home-container">
            <Navbar />

            <div className="container">

                <div className="home-header">
                    <h1 className="home-title">
                        My Tasks
                    </h1>

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search tasks"
                        value = {search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                
                <div className="stats-container">

                    <div className="stat-card">
                        <h3>Total</h3>
                        <h2>{totalTasks}</h2>
                    </div>

                    <div className="stat-card">
                        <h3>Completed</h3>
                        <h2>{CompletedTasks}</h2>
                    </div>

                    <div className="stat-card">
                        <h3>Pending</h3>
                        <h2>{PendingTasks}</h2>
                    </div>

                </div>
                {tasks
                    .filter(task => 
                                task.title.toLowerCase().includes(search.toLowerCase()) ||
                                task.description.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(task => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleComplete={toggleComplete}
                        />
                    ))
                }
            </div>
        </div>
        </>
        
    );
}

export default Home;