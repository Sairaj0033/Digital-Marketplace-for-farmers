// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Home from './Pages/Home';
// import FarmerDashboard from './Pages/FarmerDashbaord';
// import Navbar from './components/Navbar';

// const App = () => {
//     const token = localStorage.getItem('token');  // Get token from localStorage to check if user is authenticated

//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 {/* Public Routes */}
//                 <Route
//                     path="/login"
//                     element={token ? <Login /> : <Navigate to="/home" />} // Redirect to Home if already logged in
//                 />
//                 <Route
//                     path="/register"
//                     element={!token ? <Register /> : <Navigate to="/home" />} // Redirect to Home if already logged in
//                 />

//                 {/* Private Routes */}
//                 <Route
//                     path="/home"
//                     element={token ? <Home /> : <Navigate to="/login" />} // Redirect to login if not authenticated
//                 />
//                 <Route
//                     path="/farmer-dashboard"
//                     element={token && JSON.parse(localStorage.getItem('user'))?.isFarmer ? <FarmerDashboard /> : <Navigate to="/login" />} // Farmer dashboard only for farmers
//                 />

//                 {/* Default Route */}
//                 <Route path="*" element={<Navigate to="/login" />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import FarmerDashboard from './Pages/FarmerDashbaord';
import CartPage from './components/CartPage'; // Import the CartPage component
import Navbar from './components/Navbar';

const App = () => {
    const token = localStorage.getItem('token');  // Get token from localStorage to check if user is authenticated

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route
                    path="/login"
                    element={token ? <Navigate to="/home" /> : <Login />} // Redirect to Home if already logged in
                />
                <Route
                    path="/register"
                    element={!token ? <Register /> : <Navigate to="/home" />} // Redirect to Home if already logged in
                />

                {/* Private Routes */}
                <Route
                    path="/home"
                    element={token ? <Home /> : <Navigate to="/login" />} // Redirect to login if not authenticated
                />
                <Route
                    path="/farmer-dashboard"
                    element={token && JSON.parse(localStorage.getItem('user'))?.isFarmer ? <FarmerDashboard /> : <Navigate to="/login" />} // Farmer dashboard only for farmers
                />
                <Route
                    path="/cart"
                    element={token ? <CartPage /> : <Navigate to="/login" />} // Cart page for authenticated users
                />

                {/* Default Route */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;

