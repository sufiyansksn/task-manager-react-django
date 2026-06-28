import Navbar from "../components/Navbar";

function Login() {
    return (
        <>
        <Navbar />

        <div className="form-container">
            <h2>Login</h2>

            <form>
            <input
                type="email"
                placeholder="Email"
            />

            <input
                type="password"
                placeholder="Password"
            />

            <button>
                Login
            </button>
            </form>
        </div>
        </>
    );
}

export default Login;