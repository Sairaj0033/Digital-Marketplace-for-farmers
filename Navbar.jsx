// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Navbar.css';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const token = localStorage.getItem('token');  // Check if token exists in localStorage
//     const user = JSON.parse(localStorage.getItem('user'));  // Retrieve user data

//     const handleLogout = () => {
//         localStorage.removeItem('token');  // Remove token from localStorage
//         localStorage.removeItem('user');  // Remove user data from localStorage
//         navigate('/login');  // Redirect to login page after logout
//     };

//     return (
//         <nav>
//             <div className="logo">
//                 <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
//                     <h2>AgriMarket</h2>
//                 </Link>
//             </div>

//             <div className="right">
//                 {token ? (
//                     <ul>
//                         {user?.isFarmer ? (
//                             <>
//                                 {/* If user is a farmer, show both Home and Farmer Dashboard */}
//                                 <li><Link to="/home">Home</Link></li>
//                                 <li><Link to="/farmer-dashboard">Farmer Dashboard</Link></li>
//                             </>
//                         ) : (
//                             <li><Link to="/home">Home</Link></li>
//                         )}
//                         <li><button onClick={handleLogout}>Logout</button></li>
//                     </ul>
//                 ) : (
//                     <ul>
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="/register">Register</Link></li>
//                     </ul>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');  // Check if token exists in localStorage
    const user = JSON.parse(localStorage.getItem('user'));  // Retrieve user data

    const handleLogout = () => {
        localStorage.removeItem('token');  // Remove token from localStorage
        localStorage.removeItem('user');  // Remove user data from localStorage
        navigate('/login');  // Redirect to login page after logout
    };

    return (
        <nav>
            <div className="logo">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <h2>AgriMarket</h2>
                </Link>
            </div>

            <div className="right">
                {token ? (
                    <ul>
                        {user?.isFarmer ? (
                            <>
                                {/* If user is a farmer, show both Home and Farmer Dashboard */}
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/farmer-dashboard">Dashboard</Link></li>
                                <li><Link to="/cart">Cart</Link></li> {/* Added Cart link for buyers */}
                            </>
                        ) : (
                            <>
                                <li><Link to="/home">Home</Link></li>
                                
                            </>
                        )}
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                ) : (
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
