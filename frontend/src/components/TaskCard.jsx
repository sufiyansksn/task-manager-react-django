
import { useNavigate } from "react-router-dom";
import "./TaskCard.css";

function TaskCard({ task, deleteTask, toggleComplete }) {
  
  const navigate = useNavigate();

  return (
    <div className="task-card">

      <div className="task-header">

        <input 
          type = "checkbox"
          checked = {task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        <div className="task-content">
          <h2
            style={{
                textDecoration: task.completed ? "line-through" : "none", 
                color: task.completed ? "grey" : "black"
            }}
            
          >
            {task.title}
          </h2>
            <p>{task.description}</p>
        </div>
      </div>
        
      <div className="task-buttons">
        <button 
          className="edit-btn"
          onClick={() => navigate(`/edit/${task.id}`)} 
          >
            Edit
        </button>

        <button 
          className="edit-btn"
          onClick={() => {

              const confirmDelete = window.confirm(
                  `Are you sure you want to delete "${task.title}"?`
              );

              if (confirmDelete) {
                  deleteTask(task.id);
              }

            }}
          >
            Delete
        </button>
      </div>
        
    </div>
  );
}

export default TaskCard;