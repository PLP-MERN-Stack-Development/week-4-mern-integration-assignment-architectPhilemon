import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '15px' }}>
        Home
      </Link>

      {token && (
        <Link to="/create" style={{ marginRight: '15px' }}>
          Create Post
        </Link>
      )}

      {!token ? (
        <>
          <Link to="/login" style={{ marginRight: '15px' }}>
            Login
          </Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout} style={{ marginLeft: '15px' }}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
