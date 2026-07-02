import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

function App() {
  const accessToken = localStorage.getItem("access");
  console.log(accessToken);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<ProtectedRoute>
                      <Home />
                  </ProtectedRoute>} />
        
        <Route
            path="/create"
            element={
                <ProtectedRoute>
                    <CreateTask />
                </ProtectedRoute>
            }
        />
        
        <Route
          path="/edit/:id"
          element={
              <ProtectedRoute>
                  <EditTask />
              </ProtectedRoute>
          }
      />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;