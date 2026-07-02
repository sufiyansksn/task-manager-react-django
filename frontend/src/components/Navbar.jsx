import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("access")

  function handleLogout(){
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate('/login');
  }

  return (


    <nav className="navbar">
        {token ? (
      <>
          <Link to="/create">Create Task</Link>

          <button
              className="logout-btn"
              onClick={handleLogout}
          >
              Logout
          </button>
      </>
      ) : (
      <>
          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>
      </>
      )}
    </nav>
  );
}

export default Navbar;